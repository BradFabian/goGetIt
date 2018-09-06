const express = require('express');
const router = express.Router();
const request = require('request');
var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
	//user login redirect//
	app.post("/api/login", passport.authenticate("local"), function(req, res) {
	  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
	  // So we're sending the user back the route to the members page because the redirect will happen on the front end
	  // They won't get this or even be able to access this page if they aren't authed
	  res.json("/member");
	});
  
  
	// Get all examples
	app.get("/controllers/productcontroller", function(req, res) {
	  db.Products.findAll({}).then(function(dbgoGetIt) {
		res.json(dbgoGetIt);
	  });
	});

 
	app.post("/api/member", passport.authenticate("local"), function(req, res) {
	  res.json("/add");
	});
  };


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