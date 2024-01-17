const db = require('./server'); // Stelle sicher, dass dies den richtigen Pfad zur Server-Datei hat

// User-Tabelle
db.query(`
  CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`);

// Drink-Tabelle
db.query(`
  CREATE TABLE IF NOT EXISTS Drink (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    company VARCHAR(255),
    picture VARCHAR(255),
    rating INT
  )
`);
