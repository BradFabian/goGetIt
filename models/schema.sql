DROP DATABASE IF EXISTS goGetIt_db;
CREATE DATABASE goGetIt_db;

USE goGetIt_db;

CREATE TABLE products(
    ID INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(25) NOT NULL,
    product_quantity INT(45) NOT NULL,
    quantity_needed INT(45) NOT NULL,
    quantity_ordered INT(45) NOT NULL,
    primary key(ID)
    
    );