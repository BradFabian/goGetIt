const express = require('express');
const router = express.Router();
const request = require('request');

// Require controller modules
var productController = require('../controllers/productcontroller');


// Get request to get all products
router.get('/', productController.login);
// Get request to get all products
router.get('/list', productController.list);

// GET request for insert a new product
router.get('/create', productController.create);

	// GET request for about section
router.get('/about', function(req, res) {
	res.render('about');
  });

// GET request for edit one product
router.get('/:id/edit', productController.edit);

// POST request for STORE a new product
router.post('/store', productController.store);

// POST request to update a product
router.post('/update', productController.update);

// POST request to delete a product
router.post('/:id/delete', productController.delete);

// GET request for API
router.get('/api', productController.api )

module.exports = router;