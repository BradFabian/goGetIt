module.exports = function(sequelize, DataTypes) {
 
 
 var Products = sequelize.define("products", {
    product_name: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    quantity_needed: DataTypes.INTEGER,
    quantity_ordered: DataTypes.INTEGER,
   });
  return Products;
sequelize.sync().then(function (){
Products.bulkCreate({
  product_name: "Onion",
  product_quantity: 4,
  quantity_needed: 20,
  quantity_ordered: 16
},
{
  product_name: "Skirt Steak",
  product_quantity: 5,
  quantity_needed: 10,
  quantity_ordered: 5
},
);
});
};
