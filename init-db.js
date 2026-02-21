require('dotenv').config();
const mysql = require('mysql2/promise');

async function initializeDatabase() {
  try {
    // Connect to MySQL server without selecting a database
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

    // Create Database
    const dbName = process.env.DB_NAME || '90Fragen';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`Datenbank "${dbName}" wurde geprüft/erstellt.`);

    // Switch to the newly created database
    await connection.changeUser({ database: dbName });

    // Table: speakers
    const createSpeakersTable = `
      CREATE TABLE IF NOT EXISTS speakers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        vorname VARCHAR(100) NOT NULL,
        nachname VARCHAR(100) NOT NULL,
        geburtsdatum DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY unique_person (vorname, nachname, geburtsdatum)
      )
    `;
    await connection.query(createSpeakersTable);
    console.log('Tabelle "speakers" wurde geprüft/erstellt.');

    // Table: answers
    const createAnswersTable = `
      CREATE TABLE IF NOT EXISTS answers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        speaker_id INT NOT NULL,
        question_id INT NOT NULL,
        file_path VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX (speaker_id),
        UNIQUE KEY unique_answer (speaker_id, question_id),
        FOREIGN KEY (speaker_id) REFERENCES speakers(id) ON DELETE CASCADE
      )
    `;
    await connection.query(createAnswersTable);
    console.log('Tabelle "answers" wurde geprüft/erstellt.');

    console.log("✅ Datenbank-Initialisierung abgeschlossen!");
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error("Fehler bei der Datenbank-Initialisierung:", error);
    process.exit(1);
  }
}

initializeDatabase();
