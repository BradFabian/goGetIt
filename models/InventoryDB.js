module.exports = function(sequelize, DataTypes) {
  var Inventorydb = sequelize.define("Inventorydb", {
    Product : DataTypes.STRING,
    Quantity: DataTypes.INTEGER
  });
  return Inventorydb;
};
