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
  app.get("/api/inventory", function(req, res) {
    db.Products.findAll({}).then(function(dbgoGetIt) {
      res.json(dbgoGetIt);
    });
  });
  //Delete Button API//


  app.delete("/api/inventory/:id", passport.authenticate("local"), function(req, res) {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbgoGetIt) {
      res.json(dbgoGetIt);
    })
  });



  app.post("/api/inventory", passport.authenticate("local"), function(req, res) {
    db.post.create(req.body).then(function(dbgoGetIt) {
      res.json(dbgoGetIt);
    })

  });

  app.put("/api/inventory", function(req, res) {
    db.dbgoGetIt.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbgoGetIt) {
        res.json(dbgoGetIt);
      });
  });

  app.post("/api/member", passport.authenticate("local"), function(req, res) {
    res.json("/add");
  });
};
 
