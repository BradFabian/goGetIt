module.exports = function(sequelize, DataTypes){
	var Product = sequelize.define("product", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			notEmpty: {
        			msg: "Enter the product's name."
      			}
			}
		},
		
		department: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			notEmpty: {
        			msg: "Enter the product's department."
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
		required: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				min: 0
			}
		},
		gogetit: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	});

	return Product;
}
