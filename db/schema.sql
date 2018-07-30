DROP DATABASE IF EXISTS greenfield;
CREATE DATABASE greenfield;

USE greenfield;

-- Create Table called users
-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   username varchar (250) UNIQUE NOT NULL,
--   password varchar (250) UNIQUE NOT NULL,
--   zipcode varchar (20) NOT NULL,
--   PRIMARY KEY (id)
-- ) ENGINE=InnoDB;

CREATE TABLE users (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar (250) UNIQUE NOT NULL,
  `username` varchar(250) DEFAULT NULL,
  `zip` varchar(20) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

CREATE TABLE townhalls (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `createDate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `closeDate` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

CREATE TABLE questions (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `townhall_id` int NOT NULL,
  `question` LONGTEXT NOT NULL,
  `response` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY  fk_user_id (user_id)
    REFERENCES users(id),
  FOREIGN KEY fk_townhall_id (townhall_id)
    REFERENCES townhalls(id)
) ENGINE=InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

-- Insert Some Sample Data Into Users Database


INSERT INTO users (userid, username, zip)
  VALUES ('testUserID-1', 'testUserName1', 'TestZip1'),
         ('testUserID-2', 'testUserName2', 'TestZip2');

INSERT INTO townhalls (name, createDate)
  VALUES ('President Trump Townhall', '2018-06-18 10:34:09'),
         ('Vice President Joe Biden Townhall', '2018-07-21 15:43:43');

INSERT INTO questions (user_id, townhall_id, question, response)
  VALUES (
      (SELECT id FROM users WHERE userid LIKE 'testUserID-2'),

      (SELECT id FROM townhalls WHERE name LIKE 'President Trump Townhall'),

      'Test Question',

      'Test Answer'
    ),


  (
      (SELECT id FROM users WHERE userid LIKE 'testUserID-1'),

      (SELECT id FROM townhalls WHERE name LIKE 'Vice President Joe Biden Townhall'),

      'Test Question2',

      'Test Answer2'
  );



/*  From Home Directory of Project Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/

 /*Doicumentation notes:
Inform user to ensure how to start mysql server
Inform user how to run schema file (and when to run it)
Inform user how to access mysql database from within command line
 */

 /*
 http://www.mysqltutorial.org/mysql-foreign-key/
 */