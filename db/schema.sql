DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE Users (
id INT PRIMARY KEY,
username VARCHAR(100)
);

CREATE TABLE Books (
id INT PRIMARY KEY,
title VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Posts (
id INT PRIMARY KEY,
username VARCHAR(100),
book_id INT,
FOREIGN KEY (book_id) REFERENCES Books(id)
);


