DROP DATABASE IF EXISTS review_db;

CREATE DATABASE review_db;

USE review_db;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name text,
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id int NOT NULL AUTO_INCREMENT,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  listing_id int NOT NULL,
  user_id int NOT NULL,
  accuracy int NOT NULL,
  communication int NOT NULL,
  cleanliness int NOT NULL, 
  location int NOT NULL,
  check_in int NOT NULL,
  value int NOT NULL,
  _date datetime NOT NULL,
  content text,
  is_reported boolean NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);