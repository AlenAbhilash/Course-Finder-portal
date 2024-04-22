-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 13, 2024 at 05:39 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pgcoursefinder`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'Merit'),
(2, 'management'),
(3, 'community'),
(5, 'OBC'),
(8, 'ST'),
(12, 'addda'),
(11, 'OBCS'),
(13, 'dxxedx'),
(14, 'CVVV');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_college`
--

DROP TABLE IF EXISTS `tbl_college`;
CREATE TABLE IF NOT EXISTS `tbl_college` (
  `college_id` int NOT NULL AUTO_INCREMENT,
  `college_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` bigint NOT NULL,
  `website` varchar(50) NOT NULL,
  `dis_id` int NOT NULL,
  `loc_id` int NOT NULL,
  `reg_date` date NOT NULL,
  `login_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pincode` bigint NOT NULL,
  `Address` text NOT NULL,
  `college_imge` text NOT NULL,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`college_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_college`
--

INSERT INTO `tbl_college` (`college_id`, `college_name`, `email`, `phone`, `website`, `dis_id`, `loc_id`, `reg_date`, `login_id`, `pincode`, `Address`, `college_imge`, `type`) VALUES
(1, 'santhigiri college computer sciences affited to    Mahatma Gandhi University', 'Santhigiricollege@gmail.com', 9966332211, 'https://www.santhigiricollege.ac.in', 1, 17, '2024-01-22', '2', 685583, 'Santhigiri College · Address\nVazhithala, Thodupuzha, Kerala 685583', 'banner_campus1.jpg', 'Unaided'),
(10, 'newman college affited to  Mahatma Gandhi University', 'newman@gamil.com', 123456789, 'https://www.newmancollege.ac.in', 1, 13, '2024-01-24', '9', 685583, 'Newman College · Address\n Thodupuzha, Kerala 685583', 'cover-2_2780x633_acf_cropped.png', 'aided'),
(12, 'nirmala college  affiliated to  Mahatma Gandhi University', 'nirmalacollege@gamil.com', 1234567889, 'https://www.nirmalacollege.ac.in', 2, 14, '2024-02-01', '11', 685583, 'nirmal College · Address\n muvattupuzha , Kerala 685583', 'college.jpeg', 'aided'),
(13, 'marian college kuttikkanam autonomous', 'marian college@gmail.com', 321564789, 'https://www.marian college.ac.in', 1, 13, '2024-02-01', '12', 685608, 'MARIAN COLLEGE KUTTIKKANAM AUTONOMOUS. Kuttikkanam P.O, Peermade, Idukki District, Kerala, India', 'Marian_College_Kuttikkanam_-_Best_College_in_Kerala.jpg', 'aided'),
(16, 'AL-AZHAR COLLEGE OF ARTS & SCIENCE  MGU', 'al-azharcollege685608@gmail.co', 9496911119, 'https://acas.ac.in/', 1, 17, '2024-03-04', '32', 685605, 'Perumpillichira, Thodupuzha - Ezhalloor Rd, Thodupuzha, Kerala', 'AL_Azhar_Banner.jpeg', 'Unaided');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_collegepgcourse`
--

DROP TABLE IF EXISTS `tbl_collegepgcourse`;
CREATE TABLE IF NOT EXISTS `tbl_collegepgcourse` (
  `collegepgcourse_id` int NOT NULL AUTO_INCREMENT,
  `login_id` int NOT NULL,
  `ugcourse_id` int NOT NULL,
  `pgcourse_id` int NOT NULL,
  `fees` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`collegepgcourse_id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_collegepgcourse`
--

INSERT INTO `tbl_collegepgcourse` (`collegepgcourse_id`, `login_id`, `ugcourse_id`, `pgcourse_id`, `fees`) VALUES
(35, 9, 2, 2, ''),
(33, 9, 3, 3, ''),
(34, 9, 4, 9, ''),
(36, 2, 10, 7, ''),
(24, 9, 9, 6, ''),
(25, 9, 10, 7, ''),
(27, 2, 2, 2, ''),
(31, 2, 4, 9, ''),
(30, 2, 1, 1, ''),
(37, 9, 1, 1, ''),
(38, 12, 1, 1, '17,000  For management seat ,  No sem fee for another seats'),
(39, 12, 9, 6, '20,000 sem fee for all seats');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_collegepossiblecourse`
--

DROP TABLE IF EXISTS `tbl_collegepossiblecourse`;
CREATE TABLE IF NOT EXISTS `tbl_collegepossiblecourse` (
  `possiblecourse_id` int NOT NULL,
  `login_id` int NOT NULL,
  `collegepossiblecourse_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`collegepossiblecourse_id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_collegepossiblecourse`
--

INSERT INTO `tbl_collegepossiblecourse` (`possiblecourse_id`, `login_id`, `collegepossiblecourse_id`) VALUES
(3, 9, 15),
(21, 9, 14),
(10, 9, 10),
(10, 2, 11),
(18, 9, 12);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_dis`
--

DROP TABLE IF EXISTS `tbl_dis`;
CREATE TABLE IF NOT EXISTS `tbl_dis` (
  `dis_id` int NOT NULL AUTO_INCREMENT,
  `dis_name` varchar(20) NOT NULL,
  PRIMARY KEY (`dis_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_dis`
--

INSERT INTO `tbl_dis` (`dis_id`, `dis_name`) VALUES
(1, 'idukki '),
(2, 'Ernakulam'),
(3, 'kottayam'),
(5, 'Wayanad S'),
(6, 'Thiruvananthapuram');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_loc`
--

DROP TABLE IF EXISTS `tbl_loc`;
CREATE TABLE IF NOT EXISTS `tbl_loc` (
  `loc_id` int NOT NULL AUTO_INCREMENT,
  `loc_name` varchar(20) NOT NULL,
  `dis_id` int NOT NULL,
  PRIMARY KEY (`loc_id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_loc`
--

INSERT INTO `tbl_loc` (`loc_id`, `loc_name`, `dis_id`) VALUES
(17, 'Thodupuzha    ', 1),
(13, 'Neelimala', 1),
(14, 'Kavana', 2),
(19, 'xsx', 1),
(16, 'Angamaly', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

DROP TABLE IF EXISTS `tbl_login`;
CREATE TABLE IF NOT EXISTS `tbl_login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`login_id`, `username`, `password`, `role`, `status`) VALUES
(1, 'admin', 'admin', 'admin', 'adminc'),
(9, 'newman123', 'newman123', 'college', 'accepted'),
(2, 'santhigiri123', 'santhi12', 'college', 'accepted'),
(12, 'marian', 'marian123', 'college', 'accepted'),
(11, 'nirmala', 'nirmala12', 'college', 'accepted'),
(22, 'kevin', 'kevin12', 'user', 'userconfirmation'),
(21, 'alen', '1', 'user', 'userconfirmation'),
(25, 'james', '123', 'user', 'userconfirmation'),
(31, 'aadhii', '123', 'user', 'userconfirmation'),
(32, 'alazhar', 'alazhar12', 'college', 'collegeconfirmation'),
(34, 'anand1', 'A1l2e3n4@', 'user', 'userconfirmation'),
(35, 'Helwin12', 'Helwin123@', 'user', 'userconfirmation');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment`
--

DROP TABLE IF EXISTS `tbl_payment`;
CREATE TABLE IF NOT EXISTS `tbl_payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `seatbooking_id` int NOT NULL,
  `login_id` int NOT NULL,
  `amount` float NOT NULL,
  `payment_date` date NOT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_payment`
--

INSERT INTO `tbl_payment` (`payment_id`, `seatbooking_id`, `login_id`, `amount`, `payment_date`) VALUES
(10, 2, 21, 5000, '2024-02-26'),
(12, 23, 34, 5000, '2024-03-12'),
(13, 24, 35, 5000, '2024-03-12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pgcourse`
--

DROP TABLE IF EXISTS `tbl_pgcourse`;
CREATE TABLE IF NOT EXISTS `tbl_pgcourse` (
  `pgcourse_id` int NOT NULL AUTO_INCREMENT,
  `pgcourse_name` varchar(40) NOT NULL,
  `pgcourse_img` text NOT NULL,
  `ugcourse_id` int NOT NULL,
  PRIMARY KEY (`pgcourse_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_pgcourse`
--

INSERT INTO `tbl_pgcourse` (`pgcourse_id`, `pgcourse_name`, `pgcourse_img`, `ugcourse_id`) VALUES
(1, 'MCA ', 'download.jpg', 1),
(2, 'M.Com', 'download.png', 2),
(3, 'MBA', 'mba-full-form.jpg', 3),
(10, 'crd', 'Corpus.jpg', 17),
(6, 'msc.computer sciences', 'download (2).jpg', 9),
(7, 'msc.data sciences', 'msc-in-data-science.jpg', 10),
(8, 'msc.maths', 'image_1024.png', 8),
(9, 'MSW ', 'msw-full-form.webp', 4),
(11, 'mca V', 'download.jpg', 20);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_possiblecourse`
--

DROP TABLE IF EXISTS `tbl_possiblecourse`;
CREATE TABLE IF NOT EXISTS `tbl_possiblecourse` (
  `possiblecourse_id` int NOT NULL AUTO_INCREMENT,
  `ugcourse_id` int NOT NULL,
  `pgcourse_id` int NOT NULL,
  PRIMARY KEY (`possiblecourse_id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_possiblecourse`
--

INSERT INTO `tbl_possiblecourse` (`possiblecourse_id`, `ugcourse_id`, `pgcourse_id`) VALUES
(5, 1, 4),
(3, 1, 1),
(8, 8, 2),
(6, 4, 3),
(9, 1, 6),
(10, 1, 7),
(11, 2, 4),
(7, 4, 2),
(13, 10, 6),
(14, 10, 2),
(15, 3, 8),
(16, 9, 1),
(17, 9, 7),
(18, 1, 9),
(20, 2, 2),
(21, 2, 9),
(22, 20, 7);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_seatbooking`
--

DROP TABLE IF EXISTS `tbl_seatbooking`;
CREATE TABLE IF NOT EXISTS `tbl_seatbooking` (
  `seatbooking_id` int NOT NULL AUTO_INCREMENT,
  `seat_id` int NOT NULL,
  `login_id` int NOT NULL,
  `bookingstatus` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `remark` text NOT NULL,
  `booked_date` date NOT NULL,
  `interview_date` date NOT NULL,
  PRIMARY KEY (`seatbooking_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_seatbooking`
--

INSERT INTO `tbl_seatbooking` (`seatbooking_id`, `seat_id`, `login_id`, `bookingstatus`, `remark`, `booked_date`, `interview_date`) VALUES
(2, 7, 21, 'booking completed', 'you passed the interview an offical mail will come make an advances of 5,000 on this account number:123221  to make a the seat booked', '2024-02-15', '2024-02-21'),
(8, 4, 21, 'applied', '', '2024-02-16', '0000-00-00'),
(16, 8, 21, 'Under consideration', 'send the mark   list to the college Mail    You  Will Recevive a Mail or your name must be in the allotment list  ', '2024-02-16', '0000-00-00'),
(17, 7, 22, 'Accepted', 'failed', '2024-02-20', '2024-02-24'),
(18, 5, 21, 'applied', '', '2024-02-21', '0000-00-00'),
(19, 3, 21, 'applied', '', '2024-03-05', '0000-00-00'),
(22, 6, 21, 'applied', '', '2024-03-12', '0000-00-00'),
(23, 9, 34, 'booking completed', 'passed', '2024-03-12', '2024-03-13'),
(24, 10, 35, 'booking completed', 'Passed Now Payment', '2024-03-12', '2024-03-20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_seatreg`
--

DROP TABLE IF EXISTS `tbl_seatreg`;
CREATE TABLE IF NOT EXISTS `tbl_seatreg` (
  `seat_id` int NOT NULL AUTO_INCREMENT,
  `collegepgcourse_id` int NOT NULL,
  `category_id` int NOT NULL,
  `seat_number` varchar(90) NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`seat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_seatreg`
--

INSERT INTO `tbl_seatreg` (`seat_id`, `collegepgcourse_id`, `category_id`, `seat_number`, `login_id`) VALUES
(5, 30, 1, '50', 2),
(3, 35, 8, '12', 9),
(4, 33, 5, '30', 9),
(6, 31, 5, '35', 2),
(7, 24, 2, '33', 9),
(8, 24, 1, '100', 9),
(9, 37, 2, '120', 9),
(10, 38, 2, '120', 12),
(11, 36, 2, '120', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ugcourse`
--

DROP TABLE IF EXISTS `tbl_ugcourse`;
CREATE TABLE IF NOT EXISTS `tbl_ugcourse` (
  `ugcourse_id` int NOT NULL AUTO_INCREMENT,
  `ugcourse_name` varchar(40) NOT NULL,
  `ugcourse_img` text NOT NULL,
  PRIMARY KEY (`ugcourse_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_ugcourse`
--

INSERT INTO `tbl_ugcourse` (`ugcourse_id`, `ugcourse_name`, `ugcourse_img`) VALUES
(1, 'BCA ', '50_BCA-Course-Eligibilities.jpeg'),
(2, 'B.com', 'images.jpg'),
(3, 'BBA', 'BBA_Course.webp'),
(4, 'BSW', 'BSW-Course.jpg'),
(8, 'Bsc.maths', 'B.Sc_Mathematics_Course.webp'),
(9, 'bsc.computer sciences', 'download (3).jpg'),
(10, 'bsc.datascience', 'download (4).jpg'),
(20, 'bca v', '2021.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `reg_date` date NOT NULL,
  `address` text NOT NULL,
  `dis_id` int NOT NULL,
  `loc_id` int NOT NULL,
  `pincode` int NOT NULL,
  `email` varchar(40) NOT NULL,
  `login_id` int NOT NULL,
  `phone` varchar(10) NOT NULL,
  `user_img` text NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `reg_date`, `address`, `dis_id`, `loc_id`, `pincode`, `email`, `login_id`, `phone`, `user_img`) VALUES
(13, 'james', '2024-02-29', 'Arikuzha po Thodupuzha', 2, 16, 685608, 'alenabhilash2@gmail.com', 25, '123456789', 'GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg'),
(10, 'kevin', '2024-02-20', 'Arikuzha po Thodupuzha', 2, 16, 685608, 'adithyaajay098@gmail.com', 22, '1234567890', '360_F_720002943_VdQRpXjd1QtfTtCXOd7MV205v8DBdXyQ.jpg'),
(9, 'Alen Abhilash', '2024-02-02', 'Arikuzha po thodupuzha idukki', 1, 17, 685608, 'alenabhilash2@gmail.com', 21, '9544835715', 'photo-1495844927864-0cb5846bad33.avif'),
(17, 'aadhii', '2024-03-04', 'thodupuzha po idukki', 1, 17, 685608, 'adithyaajay098@gmail.com', 31, '123456789', 'Screenshot 2024-03-05 122300.png'),
(18, 'Anand P S', '2024-03-12', 'gswdgfdwsfx', 1, 17, 685608, 'adithyaajay098@gmail.com', 34, '1234567897', 'WIN_20230926_11_42_05_Pro.jpg'),
(19, 'Helwin', '2024-03-12', 'chirapurathu House arikuzha po thodupuzha', 2, 14, 685608, 'alenabhilash2@gmail.com', 35, '9544835715', 'GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
