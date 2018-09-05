
var express = require('express');
var db = require('../models');


// Require the list of departments from departments.js
// This list will fill the select element in the view
var departments = require('../config/departments');


var passport = require('../config/passport');
var middleware = require('../config/middleware')

// Find all products and render list view
exports.list = function(req, res){
	db.product.findAll().then(function(data){
		res.render("list", { products: data });
	});
}

// Render View to Login
exports.login = function(req, res){
    res.render("login", { user: passport});
};

// Render view to create a new product
exports.create = function(req, res){
	res.render("create", { department: departments});
}
// New product is created in database, and moves to add items page
exports.store = function(req,res){
    db.products.create({
        name: req.body.name,
        category: req.body.category,
        stock: req.body.stock ? parseInt(req.body.stock): 0,
        unit: req.body.unit,
        required: req.body.stock ? parseInt(req.body.stock): 0,
        unit2: req.body.unit2,
        gogetit: (req.body.gogetit == 'on') ? true: false
    })
    .then(function(){
        res.redirect('/'); // User stays in same add items page to enter multiple items
    });
}

// Destroy an Item from the database and return an OK
exports.delete = function(req,res){
    db.products.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(function(){
        res.json('Ok')
    });
}

// Find product by ID and render view to edit it
exports.edit = function(req,res){
    db.products.findById(req.params.id)
    .then(function(data){
        if(data){
            for(var i = 0 in categories) {
                if(categories[i].value == data.category){
                    categories[i].selected = true;
                }
                else{
                    categories[i].selected = false;
                }
            }
            res.render("edit", {products: data, category: categories});
        }
        else {
            res.render('404');
        }
    });
}