module.exports = function(sequelize, DataTypes) {
  var goGetIt_db = sequelize.define("products", {
    product_name: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    quantity_needed: DataTypes.INTEGER,
    quantity_ordered: DataTypes.INTEGERL,
   });
  return goGetIt_db;
  
};
