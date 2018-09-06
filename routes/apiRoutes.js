var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
  //user login redirect//
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/member.html");
  });


  // Get all examples
  app.get("/api/store", function(req, res) {
    db.Products.findAll({}).then(function(dbstore) {
      res.json(dbstore);
    });
  });
  //Delete Button API//

  app.post("/api/member", passport.authenticate("local"), function(req, res) {
    res.json("/add");
  });
};
 
