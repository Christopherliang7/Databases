DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  text_message VARCHAR(250) NOT NULL,
  room_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  user_id INTEGER AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

