<<<<<<< HEAD
DROP DATABASE IF EXISTS goGetIt_db;
=======
>>>>>>> c7ba2d3d9af41371349231ceae713d1b8112c4d9
CREATE DATABASE goGetIt_db;

USE goGetIt_db;

CREATE TABLE products(
<<<<<<< HEAD
    ID INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(25) NOT NULL,
    product_quantity INT(45) NOT NULL,
    quantity_needed INT(45) NOT NULL,
    quantity_ordered INT(45) NOT NULL,
    primary key(ID)
    
    );

    SELECT * FROM products;

    INSERT INTO products (product_name, product_quantity, quantity_needed, quantity_ordered)
    VALUES ("Oinions", 4, 20, 16),
    ("Skirt Steak", 5, 10, 5),
    ("Tomatoes", 17, 20, 0),
    ("Potatoes", 20, 0, 0),
    ("Almonds", 15, 30, 0),
    ("Apples", 20, 45, 0),
    ("Blueberries", 30, 45, 15),
    ("Cajun Seasoning (26oz)", 10, 20, 0),
    ("Salt (26oz)", 15, 20, 0),
    ("Water (16oz bottles)", 75, 100, 0);

    CREATE TABLE category(
        category_ID INT AUTO_INCREMENT NOT NULL,
        category_name VARCHAR(25) NOT NULL,
        primary key(category_ID)
    );

    SELECT * FROM category;
    INSERT INTO category (category_name)
    VALUES ("Foods"),
    ("Office Supplies"),
    ("All");
=======
    ID INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    product_quantity INT(20) NOT NULL,
    quantity_required INT(20) NOT NULL,
    PRIMARY KEY(ID)
);

SELECT * FROM products;

INSERT INTO products (product_name, product_quantity, quantity_required)
VALUES 
    ("Onions", 5, 3),
    ("Peppers", 3, 5),
    ("Water (16oz bottles)", 10, 10);
>>>>>>> c7ba2d3d9af41371349231ceae713d1b8112c4d9
