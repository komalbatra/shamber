DROP DATABASE IF EXISTS shamber_db;
CREATE DATABASE shamber_db;

USE shamber_db;

CREATE TABLE share_a_shame (
	id INT (10) AUTO_INCREMENT NOT NULL,
    Name VARCHAR (100) NOT NULL,
    Shame VARCHAR (100) NOT NULL,
    Score INT (3)
    PRIMARY KEY (id)
);

INSERT INTO share-a-shame (Name, Shame, Score)
VALUES ("Beatrice", "Farted in church", 0);

INSERT INTO share-a-shame (Name, Shame, Score)
VALUES ("Jasper", "Robbed a nun", 0);

INSERT INTO share-a-shame (Name, Shame, Score)
VALUES ("Jasmine", "Stole candy from a kid", 0);