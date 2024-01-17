const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Konfiguration, um statische Dateien aus dem 'public'-Verzeichnis zu bedienen
app.use(express.static('public'));

// Starten Sie den Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
