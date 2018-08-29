module.exports = function(sequelize, DataTypes) {
 
 
 var Products = sequelize.define("products", {
    product_name: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    quantity_needed: DataTypes.INTEGER,
    quantity_ordered: DataTypes.INTEGER,

    
   });
 

 Products.sync().then(function (){
    console.log("In product Bulk:")
  Products.bulkCreate([{
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
    {
      product_name: "Almonds",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Tomatoes",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Potatoes",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Apples",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Blue Berries",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Canjun Seasoning (26 oz)",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Salt (26 oz)",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
    {
      product_name: "Water (16 oz)",
      product_quantity: 5,
      quantity_needed: 10,
      quantity_ordered: 5
    },
  ]);
    });
    return Products;
};
