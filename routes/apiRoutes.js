
var express = require("express");
var router = express.Router();

var productController = require ("../controllers/productcontroller");




// GET TO GET ALL THE PRODUCTS
router.get('/', productController.list);

// GET TO ADD ITEM
router.get('/create', productController.create);

// GET TO EDIT ITEM
router.get('/:id/edit', productController.edit);

// POST REQUEST TO SAVE A NEW ITEM
router.post('/store', productController.store);

//POST request to DELETE a product
router.post('/:id/delete', productController.delete)


module.exports = router;

