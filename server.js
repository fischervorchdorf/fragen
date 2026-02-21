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
    const { vorname, nachname, geburtsdatum } = req.body;
    if (!vorname || !nachname || !geburtsdatum) {
        return res.status(400).json({ error: 'Vorname, Nachname und Geburtsdatum sind erforderlich.' });
    }

    try {
        // Prüfen, ob Person existiert
        const [rows] = await pool.execute(
            'SELECT id FROM speakers WHERE vorname = ? AND nachname = ? AND geburtsdatum = ?',
            [vorname, nachname, geburtsdatum]
        );

        if (rows.length > 0) {
            // Person existiert bereits
            return res.json({ speakerId: rows[0].id, isExisting: true, message: 'Person gefunden. Willkommen zurück!' });
        } else {
            // Neue Person anlegen
            const [result] = await pool.execute(
                'INSERT INTO speakers (vorname, nachname, geburtsdatum) VALUES (?, ?, ?)',
                [vorname, nachname, geburtsdatum]
            );
            return res.status(201).json({ speakerId: result.insertId, isExisting: false, message: 'Neue Person erfolgreich angelegt.' });
        }
    } catch (error) {
        console.error('Auth-Error:', error);
        res.status(500).json({ error: 'Interner Server-Fehler bei der Datenbank.' });
    }
});

// 2. Erhalte bereits beantwortete Fragen eines Sprechers
app.get('/api/answers/:speakerId', async (req, res) => {
    const { speakerId } = req.params;
    try {
        const [rows] = await pool.execute('SELECT question_id, file_path FROM answers WHERE speaker_id = ?', [speakerId]);
        const answeredQuestionsMap = {};
        rows.forEach(r => {
            answeredQuestionsMap[r.question_id] = r.file_path;
        });
        res.json({ answeredQuestions: answeredQuestionsMap });
    } catch (error) {
        console.error('Fetch Answers Error:', error);
        res.status(500).json({ error: 'Fehler beim Laden des Fortschritts.' });
    }
});

// 3. Audio Upload speichern
app.post('/api/answers', upload.single('audio'), async (req, res) => {
    const { speakerId, questionId } = req.body;
    const file = req.file;

    if (!speakerId || !questionId || !file) {
        return res.status(400).json({ error: 'Fehlende Daten (Speaker, Frage oder Audio-File).' });
    }

    try {
        const filePath = `/uploads/${file.filename}`;

        // Check if an answer for this question already exists for this speaker
        const [existing] = await pool.execute(
            'SELECT id, file_path FROM answers WHERE speaker_id = ? AND question_id = ?',
            [speakerId, questionId]
        );

        if (existing.length > 0) {
            // Update existing record
            // Optionally format to delete old file
            // const oldFile = path.join(__dirname, existing[0].file_path);
            // if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);

            await pool.execute(
                'UPDATE answers SET file_path = ? WHERE speaker_id = ? AND question_id = ?',
                [filePath, speakerId, questionId]
            );
        } else {
            // Insert new record
            await pool.execute(
                'INSERT INTO answers (speaker_id, question_id, file_path) VALUES (?, ?, ?)',
                [speakerId, questionId, filePath]
            );
        }

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
