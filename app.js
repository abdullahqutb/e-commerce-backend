const express = require('express');

const app = express();
const PORT = 3005;
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, e-commerce world test!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Path: routes.js
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).send('Server Error');
    } else {
      res.send('Registration successful!');
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Server Error');
    } else if (results.length > 0) {
      req.session.loggedin = true;
      req.session.username = username;
      res.send('Login successful!');
    } else {
      res.send('Incorrect username or password.');
    }
  });
});

app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Server Error');
    } else {
      res.json(results);
    }
  });
});
