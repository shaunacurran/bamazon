DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INTEGER (100) NOT NULL,
    product_name VARCHAR (255),
    department_name VARCHAR (255),
    price DECIMAL (10,2),
    stockqty INTEGER (244) NOT NULL,
    PRIMARY KEY (id)
);