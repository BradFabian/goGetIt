
var express = require('express');
var db = require('../models');


var categories = require('../config/categories');

// Find all products and render list view
exports.list = function (req, res){
    db.products.findAll().then(function(data){
        res.render("list", {products: data});
    });
}

// Render view to create a new item
exports.create = function(req, res){
    res.render("create", {category: categories});
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