const db = require('./server');

// Funktionen für User-Tabelle
module.exports = {
  createUser: (name, password) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO User (name, password) VALUES (?, ?)', [name, password], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  
  // Weitere Funktionen hier definieren...
};
