const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = process.env.PORT || 3000;

// Konfiguration, um statische Dateien aus dem 'public'-Verzeichnis zu bedienen
app.use(express.static('public'));

// Verbindung zur SQLite-Datenbank
const db = new sqlite3.Database('sipscoredb.db');

// Erstelle die "users" Tabelle (falls sie nicht existiert)
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT,
            password TEXT
        )
    `);
});

// Erstelle die "drinks" Tabelle (falls sie nicht existiert)
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS drinks (
            id INTEGER PRIMARY KEY,
            name TEXT,
            category TEXT,
            company TEXT,
            picture TEXT,
            rating INTEGER
        )
    `);
});

// Starten Sie den Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
