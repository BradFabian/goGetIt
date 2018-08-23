CREATE DATABASE goGetIt_db;

USE goGetIt_db;

CREATE TABLE products(
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
    ("Water(16oz bottles)", 10, 10);