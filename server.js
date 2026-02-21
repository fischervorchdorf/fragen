require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static frontend files from current directory
app.use(express.static(__dirname));

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
        // Generate unique name: speakerId_questionId_timestamp.mp3
        const { speakerId, questionId } = req.body;
        cb(null, `${speakerId}_q${questionId}_${Date.now()}.mp3`);
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

// API Routes

// 1. Auth: Login oder Registrierung
app.post('/api/auth', async (req, res) => {
    const { vorname, nachname, geburtsdatum, role, pin, zuhoererPinNeu } = req.body;

    if (!vorname || !nachname || !geburtsdatum || !role || !pin) {
        return res.status(400).json({ error: 'Bitte fülle alle (benötigten) Felder aus.' });
    }

    try {
        // Prüfen, ob Person existiert
        const [rows] = await pool.execute(
            'SELECT id, erzaehler_pin, zuhoerer_pin FROM speakers WHERE vorname = ? AND nachname = ? AND geburtsdatum = ?',
            [vorname, nachname, geburtsdatum]
        );

        if (rows.length > 0) {
            const speaker = rows[0];
            // Person existiert bereits
            if (role === 'erzaehler') {
                if (speaker.erzaehler_pin !== pin) {
                    return res.status(401).json({ error: 'Falscher Erzähler-PIN.' });
                }
                return res.json({ speakerId: speaker.id, isZuhoerer: false, message: 'Person gefunden. Willkommen zurück, Erzähler!' });
            } else if (role === 'zuhoerer') {
                if (speaker.zuhoerer_pin !== pin) {
                    return res.status(401).json({ error: 'Falscher Zuhörer-PIN.' });
                }
                return res.json({ speakerId: speaker.id, isZuhoerer: true, message: 'Zuhörer-Login erfolgreich.' });
            } else {
                return res.status(400).json({ error: 'Unbekannte Rolle.' });
            }
        } else {
            // Neue Person
            if (role === 'zuhoerer') {
                // Ein Zuhörer darf keine neue Person anlegen
                return res.status(404).json({ error: 'Wir konnten zu diesen Daten noch keinen Erzähler finden.' });
            }

            // Neue Person anlegen (role = erzaehler)
            if (!zuhoererPinNeu) {
                return res.status(400).json({ error: 'Für ein neues Profil muss auch ein Zuhörer-PIN vergeben werden.' });
            }

            const [result] = await pool.execute(
                'INSERT INTO speakers (vorname, nachname, geburtsdatum, erzaehler_pin, zuhoerer_pin) VALUES (?, ?, ?, ?, ?)',
                [vorname, nachname, geburtsdatum, pin, zuhoererPinNeu]
            );
            return res.status(201).json({ speakerId: result.insertId, isZuhoerer: false, message: 'Neues Erzähler-Profil erfolgreich angelegt.' });
        }
    } catch (error) {
        console.error('Auth-Error:', error);
        res.status(500).json({ error: 'Interner Server-Fehler bei der Datenbank.' });
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

        rows.forEach(r => {
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

            answeredQuestionsMap[r.question_id].push(responseData);
        });
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
        const filePath = `/uploads/${file.filename}`;

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

// Start Server
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
