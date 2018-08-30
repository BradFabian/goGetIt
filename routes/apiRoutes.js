var db = require("../models");

module.exports = function(app) {
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
 
};
