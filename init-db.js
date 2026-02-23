require('dotenv').config();
const mysql = require('mysql2/promise');

async function initializeDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      ssl: {
        rejectUnauthorized: false
      }
    });

    console.log("Verbunden mit MySQL...");

    const dbName = process.env.DB_NAME || '90Fragen';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`Datenbank "${dbName}" wurde geprüft/erstellt.`);

    await connection.changeUser({ database: dbName });

    const createSpeakersTable = `
      CREATE TABLE IF NOT EXISTS speakers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        vorname VARCHAR(100) DEFAULT NULL,
        nachname VARCHAR(100) DEFAULT NULL,
        geburtsdatum DATE DEFAULT NULL,
        email_verified BOOLEAN DEFAULT FALSE,
        email_verification_code VARCHAR(10) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await connection.query(createSpeakersTable);
    console.log('Tabelle "speakers" wurde geprüft/erstellt.');

    // Fallback falls die Tabelle existiert, aber Spalten fehlen
    try { await connection.query("ALTER TABLE speakers ADD COLUMN password VARCHAR(255) DEFAULT NULL"); } catch (e) { }

    const createAnswersTable = `
      CREATE TABLE IF NOT EXISTS answers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        speaker_id INT NOT NULL,
        question_id INT NOT NULL,
        file_path VARCHAR(255) NOT NULL,
        sperre_bis DATE DEFAULT NULL,
        emotion VARCHAR(50) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX (speaker_id),
        FOREIGN KEY (speaker_id) REFERENCES speakers(id) ON DELETE CASCADE
      )
    `;
    await connection.query(createAnswersTable);
    console.log('Tabelle "answers" wurde geprüft/erstellt.');

    try { await connection.query("ALTER TABLE answers ADD COLUMN sperre_bis DATE DEFAULT NULL"); } catch (e) { }
    try { await connection.query("ALTER TABLE answers ADD COLUMN emotion VARCHAR(50) DEFAULT NULL"); } catch (e) { }

    const createListenersTable = `
      CREATE TABLE IF NOT EXISTS listeners (
        id INT AUTO_INCREMENT PRIMARY KEY,
        speaker_id INT NOT NULL,
        email VARCHAR(255) NOT NULL,
        token VARCHAR(64) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (speaker_id) REFERENCES speakers(id) ON DELETE CASCADE
      )
    `;
    await connection.query(createListenersTable);
    console.log('Tabelle "listeners" wurde geprüft/erstellt.');

    console.log("✅ Datenbank-Initialisierung abgeschlossen!");
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error("Fehler bei der Datenbank-Initialisierung:", error);
    process.exit(1);
  }
}

initializeDatabase();

