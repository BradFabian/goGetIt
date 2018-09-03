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
    
    db.products.findAll().then(function(dbgoGetIt) {
      console.log(dbgoGetIt);
      res.json(dbgoGetIt);
     
    });
  });
  //Delete Button API//

  app.delete("/api/inventory/:id", function(req, res) {
    
    db.products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbgoGetIt) {
      res.json(dbgoGetIt);
    });

  });

  app.post("/api/inventory", function(req, res) {
    var userData = req.body;
    
  })
};
 
