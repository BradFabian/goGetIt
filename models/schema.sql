DROP DATABASE IF EXISTS goGetIt_db;
CREATE DATABASE goGetIt_db;

USE goGitIt_db;

CREATE TABLE(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    PRIMARY KEY(item_id)
);
