CREATE DATABASE  IF NOT EXISTS `flight_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `flight_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: flight_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `airports`
--

DROP TABLE IF EXISTS `airports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airports` (
  `airport_code` varchar(45) NOT NULL,
  `airport_name` varchar(100) DEFAULT NULL,
  `airport_location` varchar(100) DEFAULT NULL,
  `other_details` mediumtext,
  PRIMARY KEY (`airport_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airports`
--

LOCK TABLES `airports` WRITE;
/*!40000 ALTER TABLE `airports` DISABLE KEYS */;
INSERT INTO `airports` VALUES ('DEN','Denver International Airport','Denver, Colorado, USA','6 Runaways, 1 terminal, 3 airside concourses'),('IND','Indianapolis International Airport','Indianapolis, Indiana, United States','Not much, its indiana'),('JFK','John F. Kennedy International Airport','New York City, New York, US ','4 Runways, Many terminals'),('LAX','Los Angeles International Airport ','Los Angeles, California, USA','4 Runaways, 9 terminals'),('LGA','Laguardia Airport ','New York, New York, US','2 airports, 2 concourses, old airport and is being updated'),('LHR ','Heathrow Airport','London, United Kingdom ','2 Runways, 1 terminal, major hub for the european continent '),('MDW','Midway Airport','Chicago, Illlinois, US','Another airport for chicago but much smaller than ohare, 4 runways, 1 main terminal'),('ORD','O\'hare International Airport','Chicago, Illinois, US','7 Runways, 4 terminals'),('SEA','Seattle-Tacoma International Airport','Seattle, Washington, USA','3 Runaways, 1 terminal, 6 airside concourses');
/*!40000 ALTER TABLE `airports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight_schedules`
--

DROP TABLE IF EXISTS `flight_schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight_schedules` (
  `flight_number` int NOT NULL,
  `airline_code` varchar(45) DEFAULT NULL,
  `usual_aircraft_code` varchar(45) DEFAULT NULL,
  `origin_airport_code` varchar(45) DEFAULT NULL,
  `destination_airport_code` varchar(45) DEFAULT NULL,
  `departure_date_time` datetime DEFAULT NULL,
  `arrival_date_time` datetime DEFAULT NULL,
  `fare` int DEFAULT NULL,
  PRIMARY KEY (`flight_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight_schedules`
--

LOCK TABLES `flight_schedules` WRITE;
/*!40000 ALTER TABLE `flight_schedules` DISABLE KEYS */;
INSERT INTO `flight_schedules` VALUES (234,'DAL','B737','JFK','ORD','2008-11-29 13:23:44','2008-11-11 17:23:44',123),(333,'DAL','B757','JFK','ORD','2008-11-11 13:23:44','2008-11-11 17:23:44',220),(512,'SW','B737','LAX','ORD','2022-03-16 08:25:00','2022-03-16 11:25:00',90),(671,'DAL','A321','ATLA','ORD','2022-02-03 09:00:00','2022-02-03 12:00:00',67),(781,'LUF','A380','LHR','LAX','2022-01-14 11:04:00','2022-01-14 20:04:00',300),(2543,'BA','B747','JFK','LHR','2022-02-16 08:26:00','2022-02-16 21:54:00',1022),(9034,'LUF','B777','LHR','ORD','2022-01-20 09:00:00','2022-01-21 08:00:00',520),(9991,'BA','B777','SEA','LAX','2022-02-03 08:59:00','2022-02-03 14:00:00',110);
/*!40000 ALTER TABLE `flight_schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passengers`
--

DROP TABLE IF EXISTS `passengers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passengers` (
  `passenger_id` int NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `second_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `email_address` varchar(45) DEFAULT NULL,
  `address_lines` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state_province_county` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `other_passenger_details` mediumtext,
  PRIMARY KEY (`passenger_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers`
--

LOCK TABLES `passengers` WRITE;
/*!40000 ALTER TABLE `passengers` DISABLE KEYS */;
/*!40000 ALTER TABLE `passengers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `flight_number` int DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `date_reservation_made` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `flight_number` (`flight_number`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`flight_number`) REFERENCES `flight_schedules` (`flight_number`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (13,2543,'Shawn','John','2022-01-20 11:06:23'),(14,9991,'Shawn','John','2022-01-20 11:09:33'),(16,234,'Cyriac','John','2022-01-20 11:12:59'),(18,2543,'Shawn','Phan','2022-01-20 11:13:53'),(20,9034,'Michelle','John','2022-01-21 13:32:08'),(21,781,'William','Ducard','2022-01-21 14:17:04');
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-25 12:40:30
