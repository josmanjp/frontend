CREATE DATABASE  IF NOT EXISTS `portfolio` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `portfolio`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `estudio`
--

DROP TABLE IF EXISTS `estudio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `persona_id` int DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `url_imagen` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudio`
--

LOCK TABLES `estudio` WRITE;
/*!40000 ALTER TABLE `estudio` DISABLE KEYS */;
INSERT INTO `estudio` VALUES (1,'T.S.U Informatica. Instituto Universitario de Tecnología de los LLanos. Venezuela. Año 2002',1,'Mi Carrera','assets/images/features-icon-black-01.png'),(2,'Especialista en Desarrollo de Sistemas Administrativos en ambiente Windows. Visual Basic 6.0 y .net. Autodidacta',1,'Windows','assets/images/features-icon-black-02.png'),(3,'Aplicaciones Web. PHP - Mysql - HTMl- CSS. Autodidacta',1,'Aplicaciones Web','assets/images/features-icon-black-01.png'),(4,'Integracion de aplicaciones web en ambiente Android',1,'Aplicaciones Moviles','assets/images/features-icon-black-02.png'),(5,'xxxx',1,'xxxx','assets/images/features-icon-black-01.png');
/*!40000 ALTER TABLE `estudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencia`
--

DROP TABLE IF EXISTS `experiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `persona_id` int DEFAULT NULL,
  `porcentaje` int DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencia`
--

LOCK TABLES `experiencia` WRITE;
/*!40000 ALTER TABLE `experiencia` DISABLE KEYS */;
INSERT INTO `experiencia` VALUES (1,1,100,'Vb 6.0'),(2,1,60,'Vb. net'),(3,1,80,'PHP/Mysql'),(4,1,70,'android Studio'),(5,1,50,'xxxxx');
/*!40000 ALTER TABLE `experiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `apellido` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `domicilio` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `telefono` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `contrasena` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `correo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `estado` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `precios` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `sobre_mi` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `soporte` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `url_foto` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'JOSMAN JOSE','PEREZ','Argentina','+5491135124243','12345678','josmanjp@gmail.com','Disponible','A Acordar','Soy TSU en Informatica especializado en Programacion de sistemas administarticos para windows, actualmente ampliando conocimientos a la programación web y aplicaciones moviles, tengo 19 años de experiencia y multiples proyectos terminados en uso','24/7','Programador de Apps en Windows y Web Full Stack Jr.','assets/images/profile-pic.png'),(2,'Ramses Nicolas','Rengifo Arzola','Argentina','54911235469','12345678','ramsesnra@gmail.com','Disponible','A convenir','Programador de juegos en Unity','24/7','Estudiante de 5to grado','');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `persona_id` int DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `url_imagen` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (1,'Sistema de Inventario y Facturacion',1,'SIFX3','https://sifx3.com/','assets/images/sifx3.png'),(2,'App andorid y pagina web para control de remesas',1,'CAMBIOS RAPIPAGOS','https://cambiosrapipagos.com/','assets/images/rapipagos.jpg'),(3,'App andorid y pagina web para control de remesas',1,'CAMBIOS JG','https://cambiosjg.com/','assets/images/cambiosjg.png');
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `persona_id` int DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `url_imagen` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,'Desarrollo de Sistemas administrativos para control de inventario, hoteles, restaurantes, etc',1,'Desarrollo de Sistemas Windows','assets/images/service-icon-01.png'),(2,'Diseño y desaroolo de paginas web para todo tipo de negocios',1,'Paginas Web','assets/images/service-icon-02.png'),(3,'Instalacion y configuiracion de redes en ambiente windows',1,'Redes','assets/images/service-icon-03.png');
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-28 14:42:58
