-- Create the shamber_db database --
CREATE DATABASE shamber_db;

USE shamber_db;

CREATE TABLE share_a_shame (
	id INT (10) AUTO_INCREMENT NOT NULL,
    Name VARCHAR (25) NOT NULL,
    Shame VARCHAR (50), NOT NULL,
    Score INT (3)
    PRIMARY KEY (id)
);
