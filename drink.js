const db = require('./server');

// Funktionen für Drink-Tabelle
module.exports = {
  createDrink: (name, category, company, picture, rating) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Drink (name, category, company, picture, rating) VALUES (?, ?, ?, ?, ?)',
        [name, category, company, picture, rating], (err, result) => {
          if (err) reject(err);
          resolve(result);
      });
    });
  },
  
  // Weitere Funktionen hier definieren...
};
