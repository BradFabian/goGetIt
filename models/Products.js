module.exports = function(sequelize, DataTypes){
  var Products = sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Add a product you would like to put in the shopping list"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Add a product you would like to put in the shopping list"
          }
        }
      },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Enter a valid measurement unit."
        }
      }
    },
    required: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 5
      }
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Enter a valid measurement unit."
        }
      }
    },
    gogetit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  
  return Products;

}
