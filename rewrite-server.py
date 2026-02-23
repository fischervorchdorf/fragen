import re

with open('server.js', 'r') as f:
    content = f.read()

# 1. Add crypto
if "const crypto = require('crypto');" not in content:
    content = content.replace("const express = require('express');", "const express = require('express');\nconst crypto = require('crypto');")

# 2. Replace generateVerificationCode to end of resend-verification
old_block_start = r"// Helper Function: Code erzeugen"
old_block_end = r"// 2. Erhalte bereits beantwortete Fragen eines Sprechers"

new_block = """// Helper Function: Code erzeugen
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
        text: `Hallo,\n\nbitte bestätige deine E-Mail-Adresse mit diesem Code: ${code}\n\nLiebe Grüße,\nDas Team von Totenbilder.at`,
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
                text: `Hallo,\n\ndein neues Passwort lautet: ${newPassword}\nDu kannst es nach dem Login in deinen Profil-Einstellungen ändern.\n\nLiebe Grüße,\nDas Team von Totenbilder.at`,
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

// 2. Erhalte bereits beantwortete Fragen eines Sprechers"""

content = re.sub(old_block_start + r".*?" + old_block_end, new_block, content, flags=re.DOTALL)

# 3. Replace Change PIN block
change_pin_start = r"// 4. PINs ändern"
change_pin_end = r"// --- ADMIN ROUTES ---"
change_pw_block = """// 4. Passwort ändern
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
                text: `Hallo,\n\ndu wurdest eingeladen, dir Aufnahmen auf Totenbilder.at anzuhören.\n\nKlicke auf folgenden Link, um zuzuhören:\n${inviteLink}\n\nLiebe Grüße,\nDas Team von Totenbilder.at`,
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

// --- ADMIN ROUTES ---"""

content = re.sub(change_pin_start + r".*?" + change_pin_end, change_pw_block, content, flags=re.DOTALL)

with open('server.js', 'w') as f:
    f.write(content)
