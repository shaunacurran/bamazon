DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (255) NULL,
    department_name VARCHAR (255) NULL,
    price DECIMAL (10,2) NULL,
    stockqty INTEGER NULL,
    PRIMARY KEY (id)
);