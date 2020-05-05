-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 06:43 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `h_ID` int(11) NOT NULL,
  `h_name` varchar(50) NOT NULL,
  `h_phone` varchar(10) NOT NULL,
  `h_addrLine1` varchar(100) NOT NULL,
  `h_addrLine2` varchar(100) NOT NULL,
  `h_addrLine3` varchar(100) NOT NULL,
  `h_city` varchar(30) NOT NULL,
  `h_email` varchar(30) NOT NULL,
  `h_desc` varchar(300) NOT NULL,
  `h_services` varchar(300) NOT NULL,
  `h_accountNo` varchar(15) NOT NULL,
  `h_bank` varchar(30) NOT NULL,
  `h_charge` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`h_ID`, `h_name`, `h_phone`, `h_addrLine1`, `h_addrLine2`, `h_addrLine3`, `h_city`, `h_email`, `h_desc`, `h_services`, `h_accountNo`, `h_bank`, `h_charge`) VALUES
(1, 'Lanka Hospitals', '0115430000', '578', 'Elvitigala Mawatha', '', 'Colombo 5', 'lankahospitals@gmail.com', 'Open 24 hours', '350 beds and private care system', '789056146', 'BankofCeylon', '500.00'),
(8, 'Asiri Surgical Hospital', '0114524400', '21', 'Kirimadaththala Mawatha', '', 'Colombo 5', 'asirisurghosp@gmail.com', 'Open 24 hours', 'NICU, 9 BED ICU', '78904567', 'Commercial', '900.00'),
(15, 'Nawaloka Hospitals PLC', '0115577111', 'Deshamanya', '23', 'H K Dhramadama mawatha', 'Colombo 2', 'nawalokaplc@gmail.com', 'open 24 hours', 'OPD, CT scan, ETU & ambullance, MRI scan, X-RAY and etc', '45901340', 'Sampath', '700.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `password`, `role`) VALUES
(100, 'admin', 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`h_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `h_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
