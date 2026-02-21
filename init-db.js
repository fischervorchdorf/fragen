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
        erzaehler_pin VARCHAR(20) DEFAULT NULL,
        zuhoerer_pin VARCHAR(20) DEFAULT NULL,
        email VARCHAR(255) DEFAULT NULL,
        email_verified BOOLEAN DEFAULT FALSE,
        email_verification_code VARCHAR(10) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY unique_person (vorname, nachname, geburtsdatum)
      )
    `;
    await connection.query(createSpeakersTable);
    console.log('Tabelle "speakers" wurde geprüft/erstellt.');

    // Füge PIN Spalten hinzu, falls sie aus einem alten Build noch nicht existieren
    try {
      await connection.query("ALTER TABLE speakers ADD COLUMN erzaehler_pin VARCHAR(20) DEFAULT NULL");
      console.log('Spalte "erzaehler_pin" zu "speakers" hinzugefügt.');
    } catch (e) { }

    try {
      await connection.query("ALTER TABLE speakers ADD COLUMN zuhoerer_pin VARCHAR(20) DEFAULT NULL");
      console.log('Spalte "zuhoerer_pin" zu "speakers" hinzugefügt.');
    } catch (e) { }

    try {
      await connection.query("ALTER TABLE speakers ADD COLUMN email VARCHAR(255) DEFAULT NULL");
      console.log('Spalte "email" zu "speakers" hinzugefügt.');
    } catch (e) { }

    try {
      await connection.query("ALTER TABLE speakers ADD COLUMN email_verified BOOLEAN DEFAULT FALSE");
      console.log('Spalte "email_verified" zu "speakers" hinzugefügt.');
    } catch (e) { }

    try {
      await connection.query("ALTER TABLE speakers ADD COLUMN email_verification_code VARCHAR(10) DEFAULT NULL");
      console.log('Spalte "email_verification_code" zu "speakers" hinzugefügt.');
    } catch (e) { }

    // Table: answers
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

    // Füge sperre_bis Spalte hinzu, falls sie aus einem alten Build noch nicht existiert
    try {
      await connection.query("ALTER TABLE answers ADD COLUMN sperre_bis DATE DEFAULT NULL");
      console.log('Spalte "sperre_bis" zu "answers" hinzugefügt.');
    } catch (e) { }

    try {
      await connection.query("ALTER TABLE answers ADD COLUMN emotion VARCHAR(50) DEFAULT NULL");
      console.log('Spalte "emotion" zu "answers" hinzugefügt.');
    } catch (e) { }

    // Entferne den unique index, falls er existiert (aus einer vorherigen Version), um die Historie zu erlauben
    try {
      await connection.query('ALTER TABLE answers DROP INDEX unique_answer');
      console.log('Alten unique index auf "answers" entfernt.');
    } catch (e) {
      // Ignorieren, ist wahrscheinlich bereits gelöscht oder noch nie existiert
    }
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
