var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/inventory", function(req, res) {
    db.Inventorydb.findAll({}).then(function(dbInventory) {
      res.json(dbInventory);

    });
  });

 
};
