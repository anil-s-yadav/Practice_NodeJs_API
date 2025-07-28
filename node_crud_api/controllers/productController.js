// controllers/productController.js
const db = require('../db');

exports.addProduct = (req, res) => {
  const { name, price } = req.body;
   console.log(req.body);
  db.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Product added' });
    }
  );
};

exports.getProducts = (_, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};
      