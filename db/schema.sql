DROP DATABASE IF EXISTS scaleup_db;
CREATE database scaleup_db;

USE scaleup_db;

CREATE TABLE Buildings (
 id INTEGER AUTO_INCREMENT,
 building_name VARCHAR(30),
 PRIMARY KEY(id)
);

CREATE TABLE Zones (
 id INTEGER AUTO_INCREMENT,
 BuildingId INTEGER,
 plant_zones VARCHAR(30),
 PRIMARY KEY(id),
 INDEX pat_ind (building_id),
 FOREIGN KEY (building_id) REFERENCES Buildings(id),
 ON DELETE CASCADE,
 ON UPDATE CASCADE
);

CREATE TABLE Utilities (
 id INTEGER AUTO_INCREMENT,
 ZoneId INTEGER,
 utility1name VARCHAR(30),
 capacity1 INTEGER,
 used1 INTEGER,
 percent_utilizations1 INT,
 utility2name VARCHAR(30),
 capacity2 INTEGER,
 used2 INTEGER,
 percent_utilizations2 INT,
 utility3name VARCHAR(30),
 capacity3 INTEGER,
 used3 INTEGER,
 percent_utilizations3 INT,
 utility4name VARCHAR(30),
 capacity4 INTEGER,
 used4 INTEGER,
 percent_utilizations4 INT,
 PRIMARY KEY(id),
 INDEX par_ind (zone_id),
 FOREIGN KEY (zone_id) REFERENCES Zones(id),
 ON DELETE CASCADE,
 ON UPDATE CASCADE
);