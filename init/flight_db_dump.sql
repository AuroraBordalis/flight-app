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
INSERT INTO `airports` VALUES ('DEN','Denver International Airport','Denver, Colorado, USA','6 Runaways, 1 terminal, 4 airside concourses'),('DFW','Dallas Fort-Worth Internatinal Airport','Dallas, Texas, US','Big airport'),('JFK','John F. Kennedy International Airport','New York City, New York, US ','4 Runways, Many terminals'),('LAX','Los Angeles International Airport ','Los Angeles, California, USA','4 Runaways, 9 terminals'),('LGA','Laguardia Airport ','New York, New York, US','2 airports, 2 concourses, old airport and is being updated'),('LHR ','Heathrow Airport','London, United Kingdom ','2 Runways, 1 terminal, major hub for the european continent '),('MDW','Midway Airport','Chicago, Illlinois, US','Another airport for chicago but much smaller than ohare, 4 runways, 1 main terminal'),('ORD','O\'hare International Airport','Chicago, Illinois, US','7 Runways, 4 terminals'),('SEA','Seattle-Tacoma International Airport','Seattle, Washington, USA','3 Runaways, 1 terminal, 6 airside concourses');
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
INSERT INTO `flight_schedules` VALUES (333,'DAL','B757','JFK','ORD','2008-11-11 13:23:44','2008-11-11 17:23:44',220),(512,'SW','B737','LAX','ORD','2022-03-16 08:25:00','2022-03-16 11:25:00',90),(671,'DAL','A321','ATLA','ORD','2022-02-03 09:00:00','2022-02-03 12:00:00',67),(781,'LUF','A380','LHR','LAX','2022-01-14 11:04:00','2022-01-14 20:04:00',300),(9034,'LUF','B777','LHR','ORD','2022-01-20 09:00:00','2022-01-21 08:00:00',520),(9991,'BA','B777','SEA','LAX','2022-02-03 08:59:00','2022-02-03 14:00:00',112);
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
  KEY `reservations_ibfk_1` (`flight_number`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`flight_number`) REFERENCES `flight_schedules` (`flight_number`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (14,9991,'Shawn','John','2022-01-20 11:09:33'),(20,9034,'Michelle','John','2022-01-21 13:32:08'),(21,781,'William','Ducard','2022-01-21 14:17:04'),(22,9991,'Shawn','John','2022-02-17 12:00:41');
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_ADMIN'),(6,'ROLE_MOD');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1),(1,2),(2,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@flight.com','$2a$10$heQoqP0HobQgihNaXtyLnOD3WdKeOV.jmeOypdClBTCHI1cSQrPgq'),(2,'user','user@flight.com','$2a$10$nknOg/GckT4CNaXPbxNn6.802ZySbkU.PCY.ccwVbifSDBMRXyjbW');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-17 12:05:31
