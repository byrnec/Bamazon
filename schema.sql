DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  price DECIMAL(4, 2) NOT NULL,
  quantity INT(1000) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO songs (name, department, price, quantity)
VALUES ("AirPods", "Technology", 80, 4000),
("MacBook Air", "Technology", 1000, 5000),
("Magic Keyboard", "Technology", 100, 3000),
("MacBook Air", "Technology", 1000, 5000),
("Magic Mouse", "Technology", 100, 3000),
("iPhone X", "Technology", 1000, 5000),
("Christmas Pajamas", "Clothes", 30, 7000);


SELECT * FROM products;


