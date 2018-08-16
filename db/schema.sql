CREATE database burger_db;

USE burger_db;

CREATE TABLE menu (
  id AUTO_INCREMENT INT NOT NULL,
  name VARCHAR (255) NULL,
  eaten BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);