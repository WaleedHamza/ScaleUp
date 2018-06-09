DROP DATABASE IF EXISTS scaleup_db;
CREATE database scaleup_db;

USE scaleup_db;

CREATE TABLE Data (
  id INTEGER AUTO_INCREMENT,
  plant_zones VARCHAR(30),
  capacity INTEGER,
  load_data INTEGER,
  percent_utilization INT,
  PRIMARY KEY(id)
);