DROP DATABASE IF EXISTS goGetIt_db;
CREATE DATABASE goGetIt_db;

USE goGitIt_db;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    product_quantity INT(20) NOT NULL,
    quantity_required INT(20) NOT NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, product_quantity, quantity_required)
VALUES ("Onions", 5, 3),
    ("Peppers", 3, 5),
    ("Water(16oz bottles)", 10, 10);