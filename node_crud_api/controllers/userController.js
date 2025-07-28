// controllers/userController.js
const db = require('../db');

// Create user
exports.createUser = (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'User created' });
    }
  );
};



// Login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length > 0) res.send({ message: 'Login success', user: results[0] });
      else res.status(401).send({ message: 'Invalid credentials' });
    }
  );
};

// Update
exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  db.query(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'User updated' });
    }
  );
};

// Delete
exports.deleteUser = (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User deleted' });
  });
};
