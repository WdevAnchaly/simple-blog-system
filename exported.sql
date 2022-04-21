-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.21.10.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (18,'Build fast, responsive sites with Bootstrap','<p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world&rsquo;s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>','2022-04-19 14:22:45',0),(20,'Cloud eCommerce solutions','<h1 data-aos=\"fade-up\">Cloud eCommercesolutions</h1>\r\n<p data-aos-delay=\"400\" data-aos=\"fade-up\">RiseCommerce delivers world-class Magento, Shopify, Wordpress and full stack development to power your business. We provide all the necessary solutions in one place.</p>','2022-04-19 14:30:35',0),(21,' UI/UX Design','<h4><a href=\"https://risecommerce.com/\"><br>FrontEnd Developer</a></h4>\r\n<p>After planning our next stpe is UI design by creative UI UX experts who have over decads of experiance they will work closely with you to usnderstand whats your goal and deiver the concept with a visual reality.</p>','2022-04-19 14:31:42',0),(22,'OUR MARKETPLACE WEBSITE FEATURES ARE','<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\"><br>Payment Gateway</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Commission And Smooth Fee Structure</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Money Management</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">App Notifications</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Accountability</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Coupons And Promotions</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Search And Filtering Option</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Buyer And Vendor Sign Up Forms</a></h3>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<h3><a href=\"https://risecommerce.com/services/ecommerce-marketplace-development.html\">Reviews And Ratings Page</a></h3>\r\n</div>\r\n</div>','2022-04-19 14:35:25',0);
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-21 17:07:27
