USE cs340_chanjess;

DROP TABLE IF EXISTS `people_coach`;
DROP TABLE IF EXISTS `people_ranking`;
DROP TABLE IF EXISTS `people_achievement`;
DROP TABLE IF EXISTS `people_shoes`;
DROP TABLE IF EXISTS `coach`;
DROP TABLE IF EXISTS `people`;
DROP TABLE IF EXISTS `shoes`;
DROP TABLE IF EXISTS `achievement`;
DROP TABLE IF EXISTS `ranking`;


CREATE TABLE `people` (
   `id` INT(11) PRIMARY KEY AUTO_INCREMENT,
   `fname` VARCHAR(255),
   `lname` VARCHAR(255) NOT NULL,
   `height` INT(11),
   `weight` INT(11),
   `age` INT(11)
) ENGINE=’innoDB’;


CREATE TABLE `coach` (
   `id` INT(11) PRIMARY KEY AUTO_INCREMENT,
   `fname` VARCHAR(255),
   `lname` VARCHAR(255) NOT NULL,
   `yearsExp` INT(11)
) ENGINE=’innoDB’;


CREATE TABLE `shoes` (
   `id` INT(11) PRIMARY KEY AUTO_INCREMENT,
   `brand` VARCHAR(255) NOT NULL,
   `model` VARCHAR(255) NOT NULL,
   `year` INT(11)
) ENGINE=’innoDB’;


CREATE TABLE `achievement` (
   `id` INT(11) PRIMARY KEY AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `year` INT(11)
) ENGINE=’innoDB’;


CREATE TABLE `ranking` (
   `id` INT(11) PRIMARY KEY AUTO_INCREMENT,
   `rank` INT(11) NOT NULL,
   `location` VARCHAR(255)
) ENGINE=’innoDB’;



CREATE TABLE `people_shoes` (
   `people_id` INT(11),
   `shoes_id` INT(11),
   PRIMARY KEY (`people_id`, `shoes_id`),
   FOREIGN KEY (`people_id`) REFERENCES people(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (`shoes_id`) REFERENCES shoes(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=’innoDB’;


CREATE TABLE `people_achievement` (
   `people_id` INT(11),
   `achievement_id` INT(11),
   PRIMARY KEY (`people_id`, `achievement_id`),
   FOREIGN KEY (`people_id`) REFERENCES people(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (`achievement_id`) REFERENCES achievement(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=’innoDB’;


CREATE TABLE `people_ranking` (
   `people_id` INT(11),
   `ranking_id` INT(11),
   PRIMARY KEY (`people_id`, `ranking_id`),
   FOREIGN KEY (`people_id`) REFERENCES people(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (`ranking_id`) REFERENCES ranking(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=’innoDB’;


CREATE TABLE `people_coach` (
   `people_id` INT(11),
   `coach_id` INT(11),
   PRIMARY KEY (`people_id`, `coach_id`),
   FOREIGN KEY (`people_id`) REFERENCES people(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (`coach_id`) REFERENCES coach(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=’innoDB’;
