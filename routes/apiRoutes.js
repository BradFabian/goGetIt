var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/inventory", function(req, res) {
    db.goGetIt_db.findAll({}).then(function(dbgoGetIt) {
      res.json(dbgoGetIt);

    });
  });

 
};
