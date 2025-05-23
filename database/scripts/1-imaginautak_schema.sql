-- MySQL Script generated by MySQL Workbench
-- vie 09 may 2025 12:49:13
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema imaginautak
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `imaginautak` ;

-- -----------------------------------------------------
-- Schema imaginautak
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `imaginautak` ;
USE `imaginautak` ;

-- -----------------------------------------------------
-- Table `imaginautak`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`user` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`artist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`artist` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`artist` (
  `artist_id` INT UNSIGNED NOT NULL,
  `artistic_name` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(300) NOT NULL,
  `website` VARCHAR(45) NULL,
  `social_media_01` VARCHAR(45) NOT NULL,
  `social_media_02` VARCHAR(45) NULL,
  `img` VARCHAR(250) NOT NULL DEFAULT '/images/placehold_profile.png',
  PRIMARY KEY (`artist_id`),
  INDEX `fk_artist_user1_idx` (`artist_id` ASC) VISIBLE,
  CONSTRAINT `fk_artist_user1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `imaginautak`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`project` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`project` (
  `project_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `trigger_warnings` ENUM('violencia', 'abuso', 'drogas', 'muerte', 'salud mental', 'enfermedad', 'discriminación') NULL,
  `project_url` VARCHAR(145) NOT NULL,
  `project_imgs` VARCHAR(255) NOT NULL DEFAULT 'images/placehold_project.png',
  `project_video` VARCHAR(255) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`project_id`),
  UNIQUE INDEX `project_id_UNIQUE` (`project_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`fan`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`fan` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`fan` (
  `fan_id` INT UNSIGNED NOT NULL,
  `img` VARCHAR(128) NOT NULL DEFAULT 'images/placehold_profile.png',
  `bio` VARCHAR(250) NULL,
  PRIMARY KEY (`fan_id`),
  INDEX `fk_fan_user_idx` (`fan_id` ASC) VISIBLE,
  CONSTRAINT `fk_fan_user`
    FOREIGN KEY (`fan_id`)
    REFERENCES `imaginautak`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`artist_has_project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`artist_has_project` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`artist_has_project` (
  `artist_id` INT UNSIGNED NOT NULL,
  `project_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`artist_id`, `project_id`),
  INDEX `fk_artist_has_project_project1_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_artist_has_project_artist1_idx` (`artist_id` ASC) VISIBLE,
  CONSTRAINT `fk_artist_has_project_artist1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `imaginautak`.`artist` (`artist_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_artist_has_project_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `imaginautak`.`project` (`project_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`fan_favorites_project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`fan_favorites_project` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`fan_favorites_project` (
  `fan_id` INT UNSIGNED NOT NULL,
  `project_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`fan_id`, `project_id`),
  INDEX `fk_fan_has_project1_project1_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_fan_has_project1_fan1_idx` (`fan_id` ASC) VISIBLE,
  CONSTRAINT `fk_fan_has_project1_fan1`
    FOREIGN KEY (`fan_id`)
    REFERENCES `imaginautak`.`fan` (`fan_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_fan_has_project1_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `imaginautak`.`project` (`project_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`fan_follows_artist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`fan_follows_artist` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`fan_follows_artist` (
  `fan_id` INT UNSIGNED NOT NULL,
  `artist_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`fan_id`, `artist_id`),
  INDEX `fk_fan_has_artist_artist1_idx` (`artist_id` ASC) VISIBLE,
  INDEX `fk_fan_has_artist_fan1_idx` (`fan_id` ASC) VISIBLE,
  CONSTRAINT `fk_fan_has_artist_fan1`
    FOREIGN KEY (`fan_id`)
    REFERENCES `imaginautak`.`fan` (`fan_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_fan_has_artist_artist1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `imaginautak`.`artist` (`artist_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`category` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`category` (
  `category_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE INDEX `category_id_UNIQUE` (`category_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imaginautak`.`project_has_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imaginautak`.`project_has_category` ;

CREATE TABLE IF NOT EXISTS `imaginautak`.`project_has_category` (
  `project_id` INT UNSIGNED NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`project_id`, `category_id`),
  INDEX `fk_project_has_category_category1_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_project_has_category_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_has_category_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `imaginautak`.`project` (`project_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_project_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `imaginautak`.`category` (`category_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
