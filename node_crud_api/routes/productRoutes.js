// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/productsAdd', productController.addProduct);
router.get('/productsGet', productController.getProducts);

module.exports = router;
