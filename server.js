require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql2/promise');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static frontend files from current directory
app.use(express.static(__dirname));

// R2 Configuration
const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.eu.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
    forcePathStyle: true
});

// Multer Storage Configuration
// Erstellt den Ordner, falls er nicht existiert
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Generate unique name: speakerId_questionId_timestamp.ext
        const { speakerId, questionId } = req.body;
        const ext = file.originalname ? file.originalname.split('.').pop() : 'webm';
        cb(null, `${speakerId}_q${questionId}_${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage });

// Database Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '90Fragen',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: false
    }
});

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    host: 'mail.gmx.net',
    port: 465,
    secure: true, // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER || 'fischervorchdorf@gmx.at',
        pass: process.env.SMTP_PASSWORD // Passwort kommt aus der .env Datei
    }
});

// Helper Function: Code erzeugen
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

function generateToken() {
    return crypto.randomBytes(32).toString('hex');
}

async function sendVerificationEmail(email, code) {
    if (!process.env.SMTP_PASSWORD) return;
    const mailOptions = {
        from: `"Totenbilder.at" <${process.env.SMTP_USER || 'fischervorchdorf@gmx.at'}>`,
        to: email,
        subject: 'Bestätige deine E-Mail bei Totenbilder.at',
        text: `Hallo,

bitte bestätige deine E-Mail-Adresse mit diesem Code: ${code}

Liebe Grüße,
Das Team von Totenbilder.at`,
        html: `<p>Hallo,</p><p>bitte bestätige deine E-Mail-Adresse mit diesem Code:</p><h2>${code}</h2><p>Liebe Grüße,<br>Das Team von Totenbilder.at</p>`
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log(`Verifizierungsmail an ${email} gesendet.`);
    } catch (e) {
        console.error(`Fehler beim Senden der Verifizierungsmail: `, e);
    }
}

// API Routes

// 1. Auth: Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Bitte E-Mail und Passwort eingeben.' });

    try {
        const hashed = hashPassword(password);
        const [rows] = await pool.execute('SELECT id, vorname, email_verified FROM speakers WHERE email = ? AND password = ?', [email, hashed]);
        
        if (rows.length > 0) {
            const speaker = rows[0];
            return res.json({
                speakerId: speaker.id,
                isZuhoerer: false,
                emailVerified: !!speaker.email_verified,
                needsProfile: !speaker.vorname,
                vorname: speaker.vorname
            });
        } else {
            return res.status(401).json({ error: 'E-Mail oder Passwort falsch.' });
        }
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Server-Fehler' });
    }
});

// Registrierung
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'E-Mail und Passwort sind erforderlich.' });

    try {
        const [rows] = await pool.execute('SELECT id FROM speakers WHERE email = ?', [email]);
        if (rows.length > 0) return res.status(400).json({ error: 'Diese E-Mail ist bereits registriert.' });

        const hashed = hashPassword(password);
        const code = generateVerificationCode();

        const [result] = await pool.execute(
            'INSERT INTO speakers (email, password, email_verification_code, email_verified) VALUES (?, ?, ?, false)',
            [email, hashed, code]
        );

        await sendVerificationEmail(email, code);

        return res.status(201).json({
            speakerId: result.insertId,
            message: 'Registrierung erfolgreich. Bitte E-Mail bestätigen.',
            emailVerified: false,
            needsProfile: true
        });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ error: 'Server-Fehler' });
    }
});

app.post('/api/update-profile', async (req, res) => {
    const { speakerId, vorname, nachname, geburtsdatum } = req.body;
    if (!speakerId || !vorname || !nachname || !geburtsdatum) return res.status(400).json({error: 'Alle Felder müssen ausgefüllt sein'});
    try {
        await pool.execute('UPDATE speakers SET vorname=?, nachname=?, geburtsdatum=? WHERE id=?', [vorname, nachname, geburtsdatum, speakerId]);
        res.json({success: true, vorname});
    } catch(e) {
        res.status(500).json({error: 'Fehler beim Speichern des Profils'});
    }
});

app.post('/api/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const [rows] = await pool.execute('SELECT id FROM speakers WHERE email = ?', [email]);
        if (rows.length === 0) return res.status(404).json({ error: 'E-Mail nicht gefunden.' });
        
        const newPassword = generateVerificationCode(); 
        const hashed = hashPassword(newPassword);
        
        await pool.execute('UPDATE speakers SET password = ? WHERE email = ?', [hashed, email]);
        
        if (process.env.SMTP_PASSWORD) {
            const mailOptions = {
                from: `"Totenbilder.at" <${process.env.SMTP_USER || 'fischervorchdorf@gmx.at'}>`,
                to: email,
                subject: 'Dein neues Passwort für Totenbilder.at',
                text: `Hallo,

dein neues Passwort lautet: ${newPassword}
Du kannst es nach dem Login in deinen Profil-Einstellungen ändern.

Liebe Grüße,
Das Team von Totenbilder.at`,
            };
            await transporter.sendMail(mailOptions);
        }
        res.json({ message: 'Neues Passwort wurde an deine E-Mail gesendet.' });
    } catch (error) {
        res.status(500).json({ error: 'Server-Fehler' });
    }
});

app.post('/api/verify-email', async (req, res) => {
    const { speakerId, code } = req.body;
    try {
        const [rows] = await pool.execute('SELECT email_verification_code, email_verified FROM speakers WHERE id = ?', [speakerId]);
        if (rows.length === 0) return res.status(404).json({ error: 'Speaker nicht gefunden.' });
        if (rows[0].email_verified) return res.json({ message: 'E-Mail ist bereits verifiziert.' });

        if (rows[0].email_verification_code === code) {
            await pool.execute('UPDATE speakers SET email_verified = true, email_verification_code = NULL WHERE id = ?', [speakerId]);
            return res.json({ message: 'E-Mail erfolgreich verifiziert.' });
        } else {
            return res.status(400).json({ error: 'Falscher Verifizierungscode.' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Server-Fehler' });
    }
});

app.post('/api/resend-verification', async (req, res) => {
    const { speakerId } = req.body;
    try {
        const [rows] = await pool.execute('SELECT email FROM speakers WHERE id = ?', [speakerId]);
        if (rows.length === 0) return res.status(404).json({ error: 'Nicht gefunden' });
        const speaker = rows[0];
        if (!speaker.email) return res.status(400).json({ error: 'Keine E-Mail vorhanden' });

        const code = generateVerificationCode();
        await pool.execute('UPDATE speakers SET email_verification_code = ? WHERE id = ?', [code, speakerId]);
        await sendVerificationEmail(speaker.email, code);

        return res.json({ message: 'Neuer Code wurde gesendet.' });
    } catch (e) {
        res.status(500).json({ error: 'Fehler beim Senden' });
    }
});

// 2. Erhalte bereits beantwortete Fragen eines Sprechers
app.get('/api/answers/:speakerId', async (req, res) => {
    const { speakerId } = req.params;
    const isZuhoerer = req.query.isZuhoerer === 'true';

    try {
        const [rows] = await pool.execute('SELECT id, question_id, file_path, sperre_bis, emotion, created_at FROM answers WHERE speaker_id = ? ORDER BY created_at ASC', [speakerId]);
        const answeredQuestionsMap = {};

        const now = new Date();
        now.setHours(0, 0, 0, 0); // Nur Datum vergleichen

        for (const r of rows) {
            if (!answeredQuestionsMap[r.question_id]) {
                answeredQuestionsMap[r.question_id] = [];
            }

            let responseData = {
                id: r.id,
                file_path: r.file_path,
                sperre_bis: r.sperre_bis,
                emotion: r.emotion,
                created_at: r.created_at,
                is_locked: false
            };

            // Zeitkapsel-Prüfung nur für Zuhörer
            if (isZuhoerer && r.sperre_bis) {
                const sperreDate = new Date(r.sperre_bis);
                if (sperreDate > now) {
                    responseData.is_locked = true;
                    responseData.file_path = null; // Dateipfad ausblenden!
                }
            }

            // Falls nicht gesperrt und R2 URL
            if (responseData.file_path && responseData.file_path.startsWith('r2://')) {
                const fileName = responseData.file_path.replace('r2://', '');
                try {
                    const command = new GetObjectCommand({
                        Bucket: process.env.R2_BUCKET_NAME,
                        Key: fileName
                    });
                    // Generiere URL (1 Stunde gültig)
                    responseData.file_path = await getSignedUrl(s3, command, { expiresIn: 3600 });
                } catch (e) {
                    console.error('Presigned URL Error:', e);
                    responseData.file_path = null;
                }
            }

            answeredQuestionsMap[r.question_id].push(responseData);
        }
        res.json({ answeredQuestions: answeredQuestionsMap });
    } catch (error) {
        console.error('Fetch Answers Error:', error);
        res.status(500).json({ error: 'Fehler beim Laden des Fortschritts.' });
    }
});

// 3. Audio Upload speichern
app.post('/api/answers', upload.single('audio'), async (req, res) => {
    const { speakerId, questionId, sperreBis, emotion } = req.body;
    const file = req.file;

    if (!speakerId || !questionId || !file) {
        return res.status(400).json({ error: 'Fehlende Daten (Speaker, Frage oder Audio-File).' });
    }

    try {
        const fileContent = fs.readFileSync(file.path);
        const fileName = file.filename;

        // Upload to Cloudflare R2
        await s3.send(new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: fileName,
            Body: fileContent,
            ContentType: file.mimetype
        }));

        // Delete local file
        fs.unlinkSync(file.path);

        const filePath = `r2://${fileName}`;

        // sorge dafür, dass leere sperreBis strings als NULL in der DB landen
        const sperreBisValue = sperreBis && sperreBis.trim() !== '' ? sperreBis : null;
        // Leere Emotionen als NULL
        const emotionValue = emotion && emotion.trim() !== '' ? emotion : null;

        // Immer als neuen Eintrag speichern (Historie-Funktion + Zeitkapsel + Emotion)
        await pool.execute(
            'INSERT INTO answers (speaker_id, question_id, file_path, sperre_bis, emotion) VALUES (?, ?, ?, ?, ?)',
            [speakerId, questionId, filePath, sperreBisValue, emotionValue]
        );

        res.status(200).json({ success: true, message: 'Audio erfolgreich gespeichert.' });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: 'Fehler beim Speichern der Antwort in der Datenbank.' });
    }
});

// DELETE: Antwort löschen
app.delete('/api/answers/:id', async (req, res) => {
    const { id } = req.params;
    const { speakerId } = req.body;

    if (!speakerId) return res.status(401).json({ error: 'Nicht autorisiert.' });

    try {
        // DB-Eintrag prüfen (und Pfad auslesen, um Datei zu löschen)
        const [rows] = await pool.execute('SELECT file_path FROM answers WHERE id = ? AND speaker_id = ?', [id, speakerId]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Aufnahme nicht gefunden oder ungültige Berechtigung.' });
        }

        const filePath = rows[0].file_path;

        // Wenn die Datei auf Cloudflare R2 liegt, von dort löschen
        if (filePath && filePath.startsWith('r2://')) {
            const fileName = filePath.replace('r2://', '');
            try {
                await s3.send(new DeleteObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName
                }));
            } catch (r2Err) {
                console.error("Fehler beim Löschen aus R2 (fährt trotzdem mit DB-Löschung fort):", r2Err);
            }
        } else if (filePath) {
            // Sonst löschen alter lokaler Dateien
            const localPath = path.join(__dirname, filePath);
            if (fs.existsSync(localPath)) {
                fs.unlinkSync(localPath);
            }
        }

        // Aus der Datenbank löschen
        await pool.execute('DELETE FROM answers WHERE id = ? AND speaker_id = ?', [id, speakerId]);

        res.json({ success: true, message: 'Aufnahme erfolgreich gelöscht.' });
    } catch (error) {
        console.error('Delete Error:', error);
        res.status(500).json({ error: 'Fehler beim Löschen der Antwort.' });
    }
});

// 4. Passwort ändern
app.post('/api/change-password', async (req, res) => {
    const { speakerId, oldPassword, newPassword } = req.body;
    if (!speakerId || !oldPassword || !newPassword) return res.status(400).json({ error: 'Bitte fülle alle Felder aus.' });

    try {
        const hashedOld = hashPassword(oldPassword);
        const [rows] = await pool.execute('SELECT id FROM speakers WHERE id = ? AND password = ?', [speakerId, hashedOld]);
        if (rows.length === 0) return res.status(401).json({ error: 'Altes Passwort ist falsch.' });

        const hashedNew = hashPassword(newPassword);
        await pool.execute('UPDATE speakers SET password = ? WHERE id = ?', [hashedNew, speakerId]);
        res.json({ success: true, message: 'Passwort erfolgreich geändert.' });
    } catch (e) {
        res.status(500).json({ error: 'Server-Fehler' });
    }
});

// Listener Invites
app.post('/api/invite-listener', async (req, res) => {
    const { speakerId, email } = req.body;
    if (!speakerId || !email) return res.status(400).json({ error: 'E-Mail erforderlich.' });

    try {
        const token = generateToken();
        await pool.execute('INSERT INTO listeners (speaker_id, email, token) VALUES (?, ?, ?)', [speakerId, email, token]);
        
        const inviteLink = `${req.headers.origin || 'http://localhost:3000'}/?listener_token=${token}`;
        if (process.env.SMTP_PASSWORD) {
            const mailOptions = {
                from: `"Totenbilder.at" <${process.env.SMTP_USER || 'fischervorchdorf@gmx.at'}>`,
                to: email,
                subject: 'Du wurdest eingeladen, einer Lebensgeschichte zuzuhören',
                text: `Hallo,

du wurdest eingeladen, dir Aufnahmen auf Totenbilder.at anzuhören.

Klicke auf folgenden Link, um zuzuhören:
${inviteLink}

Liebe Grüße,
Das Team von Totenbilder.at`,
                html: `<p>Hallo,</p><p>du wurdest eingeladen, dir Aufnahmen auf Totenbilder.at anzuhören.</p><p><a href="${inviteLink}">Hier klicken, um zuzuhören</a></p><p>Liebe Grüße,<br>Das Team von Totenbilder.at</p>`
            };
            await transporter.sendMail(mailOptions);
        }
        res.json({ success: true, message: 'Einladung gesendet.' });
    } catch (e) {
        res.status(500).json({ error: 'Fehler beim Senden der Einladung.' });
    }
});

app.get('/api/listener-auth/:token', async (req, res) => {
    const { token } = req.params;
    try {
        const [rows] = await pool.execute(
            'SELECT l.speaker_id, s.vorname FROM listeners l JOIN speakers s ON l.speaker_id = s.id WHERE l.token = ?',
            [token]
        );
        if (rows.length === 0) return res.status(401).json({ error: 'Ungültiger oder abgelaufener Einladungslink.' });
        
        const data = rows[0];
        res.json({ speakerId: data.speaker_id, vorname: data.vorname, isZuhoerer: true });
    } catch (e) {
        res.status(500).json({ error: 'Server-Fehler' });
    }
});

// --- ADMIN ROUTES ---
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'geheim123';

app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.json({ success: true, token: ADMIN_PASSWORD });
    } else {
        res.status(401).json({ error: 'Falsches Passwort.' });
    }
});

app.get('/api/admin/speakers', async (req, res) => {
    if (req.headers.authorization !== `Bearer ${ADMIN_PASSWORD}`) return res.status(401).json({ error: 'Unauthorized' });
    try {
        const [rows] = await pool.execute(`
            SELECT s.id, s.vorname, s.nachname, s.geburtsdatum, s.email,
                   COUNT(a.id) as answers_count
            FROM speakers s
            LEFT JOIN answers a ON s.id = a.speaker_id
            GROUP BY s.id
            ORDER BY s.created_at DESC
        `);
        res.json(rows);
    } catch (error) {
        console.error('Admin Fetch Error:', error);
        res.status(500).json({ error: 'DB Fehler.' });
    }
});

app.post('/api/admin/reset-pin', async (req, res) => {
    if (req.headers.authorization !== `Bearer ${ADMIN_PASSWORD}`) return res.status(401).json({ error: 'Unauthorized' });
    const { speakerId, type } = req.body;
    try {
        if (type === 'erzaehler') {
            await pool.execute('UPDATE speakers SET erzaehler_pin = "1234" WHERE id = ?', [speakerId]);
        } else if (type === 'zuhoerer') {
            await pool.execute('UPDATE speakers SET zuhoerer_pin = "1234" WHERE id = ?', [speakerId]);
        }
        res.json({ success: true, message: 'PIN auf 1234 gesetzt.' });
    } catch (error) {
        console.error('Admin Reset Error:', error);
        res.status(500).json({ error: 'DB Fehler.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
