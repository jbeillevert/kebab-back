DROP DATABASE kebab;

CREATE DATABASE kebab;

USE DATABASE kebab;

CREATE TABLE recipes (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
type VARCHAR(100),
nbIngredient INT NULL,
cookingTime INT NULL,
description TEXT,
picture VARCHAR(255)
);

CREATE TABLE ingredients (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
category VARCHAR(100),
picture VARCHAR(255)
);

CREATE TABLE recipes_ingredients (
id INT AUTO_INCREMENT PRIMARY KEY,
idRecipe INT NOT NULL,
idIngredient INT NOT NULL,
FOREIGN KEY (idRecipe) REFERENCES recipes(id),
FOREIGN KEY (idIngredient) REFERENCES ingredients(id)
);

CREATE TABLE user (
id INT AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(100),
lastname VARCHAR(100),
mail VARCHAR(100),
password VARCHAR(255)
);

CREATE TABLE publication (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
userId INT NOT NULL,
description TEXT,
nbCommentaries INT,
FOREIGN KEY (userId) REFERENCES user(id)
);