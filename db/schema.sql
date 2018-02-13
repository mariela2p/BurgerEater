CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
                    id INTEGER(11) AUTO_INCREMENT NOT NULL,
                    burger_name VARCHAR (100) NOT NULL,
                    devoured BOOLEAN DEFAULT false,
                    dates TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    PRIMARY KEY(id)
);
