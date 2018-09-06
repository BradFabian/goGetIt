DROP DATABASE IF EXISTS storedb;
CREATE database storedb;

USE storedb;

CREATE TABLE products (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  department varchar(255) NOT NULL,
  stock int(11) DEFAULT 0,
  required int(11) DEFAULT 0,
  gogetit tinyint(1) DEFAULT 0,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;




INSERT INTO products (id, name, department, stock, required, gogetit, createdAt, updatedAt) VALUES 
(1,'Onions','Kitchen',10,5,1,'2018-09-03 03:20:53','2018-09-03 02:55:50'),
(2,'Tomatos','Kitchen',10,5,1,'2018-09-03 03:20:53','2018-09-03 02:55:50'),
(3,'Skirt Steak','Kitchen',10,5,1,'2018-09-03 03:20:53','2018-09-03 02:55:50'),
(4,'Toilet Paper','Cleaning',10,5,1,'2018-09-03 03:20:53','2018-09-03 02:55:50');



