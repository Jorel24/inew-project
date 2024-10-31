CREATE DATABASE productDatabase;
USE productDatabase;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  file VARCHAR(255) NOT NULL,
  rating INT CHECK (rating BETWEEN 0 AND 5),
  oldprice DECIMAL(10, 2) NOT NULL,
  newprice DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (name, file, rating, oldprice, newprice) VALUES
  ('USB Key 16GB', 'images/it_service/1.jpg', 2, 35.00, 25.00),
  ('Membrane keyboard', 'images/it_service/2.jpg', 1, 24.99, 12.49),
  ('Logitech G502', 'images/it_service/3.jpg', 5, 124.99, 112.49),
  ('Dygma Raise', 'images/it_service/4.jpg', 4, 345.00, 325.00),
  ('Logitech Headphones', 'images/it_service/5.jpg', 3, 135.00, 125.00),
  ('Asus monitor', 'images/it_service/6.jpg', 4, 135.00, 115.00),
  ('Speakers', 'images/it_service/7.jpg', 3, 45.00, 29.00),
  ('Mouse', 'images/it_service/8.jpg', 2, 32.00, 15.00),
  ('Watercooler 360mm', 'images/it_service/9.jpg', 5, 139.00, 129.00);