DROP DATABASE IF EXISTS goGetIt_db;
CREATE DATABASE goGetIt_db;

USE goGetIt_db;

CREATE TABLE products(
    ID INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(25) NOT NULL,
    product_quantity INT(45) NOT NULL,
    quantity_needed INT(45) NOT NULL,
    quantity_ordered INT(45) NOT NULL,
    category VARCHAR(25) NOT NULL,
    primary key(ID)
    
    );

    SELECT * FROM products;

    INSERT INTO products (product_name, product_quantity, quantity_needed, quantity_ordered, category)
    VALUES ("Oinions", 4, 20, 16, "food"),
    ("Skirt Steak", 5, 10, 5, "food"),
    ("Tomatoes", 17, 20, 0, "food"),
    ("Potatoes", 20, 0, 0, "food"),
    ("Almonds", 15, 30, 0, "food"),
    ("Apples", 20, 45, 0, "food"),
    ("Blueberries", 30, 45, 15, "food"),
    ("Cajun Seasoning (26oz)", 10, 20, 0, "food"),
    ("Salt (26oz)", 15, 20, 0, "food"),
    ("Water (16oz bottles)", 75, 100, 0, "food"),
    ("Paper (box)", 15, 30, 0, "office supplies"),
    ("Pencils (box)", 20, 27, 0, "office supplies");