const mysql = require('mysql');
// const expressSession = require('express-session');

const db = mysql.createConnection({
  host: 'ecommerce-db.cfcvwjxnwqwd.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: '13579ecommerce',
  database: 'ecommerce',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;

// Use session for tracking logins
// app.use(expressSession({
//   secret: 'your_secret_key',
//   resave: true,
//   saveUninitialized: false
// }));
