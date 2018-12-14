DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  department VARCHAR(20) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (name, department, price, quantity)
VALUES ("AirPods", "Technology", 80, 4000),
("MacBook Air", "Technology", 1000, 5000),
("Magic Keyboard", "Technology", 100, 3000),
("MacBook Air", "Technology", 1000, 5000),
("Magic Mouse", "Technology", 100, 3000),
("iPhone X", "Technology", 1000, 5000),
("Christmas Pajamas", "Clothes", 30, 7000);


SELECT * FROM products;


