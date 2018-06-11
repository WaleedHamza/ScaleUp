DROP DATABASE IF EXISTS scaleup_db;
CREATE database scaleup_db;

USE scaleup_db;

CREATE TABLE Utilities (
  id INTEGER AUTO_INCREMENT,
  utility_name VARCHAR(30),
  capacity INTEGER,
  load INTEGER,
  percent_utilization INT,
  PRIMARY KEY(id)
);

CREATE TABLE Buildings (
  id INTEGER AUTO_INCREMENT,
  building_name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE Zones (
  id INTEGER AUTO_INCREMENT,
  plant_zones VARCHAR(30),
  PRIMARY KEY(id)
);