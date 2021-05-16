-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 16, 2021 at 01:49 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tracking_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210108064703-create-user.js'),
('20210515172400-create-task.js'),
('20210516051105-create-subtask.js');

-- --------------------------------------------------------

--
-- Table structure for table `Subtasks`
--

CREATE TABLE `Subtasks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `taskName` varchar(255) DEFAULT NULL,
  `dateAndTime` varchar(255) DEFAULT NULL,
  `taskId` int(11) DEFAULT NULL,
  `isDelete` tinyint(1) DEFAULT 0,
  `isComplete` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Subtasks`
--

INSERT INTO `Subtasks` (`id`, `name`, `taskName`, `dateAndTime`, `taskId`, `isDelete`, `isComplete`, `createdAt`, `updatedAt`) VALUES
(1, 'subtask1', 'tsbtask1 101', '2021-05-16T05:34:08.020Z', 8, 1, 1, '2021-05-16 05:34:22', '2021-05-16 08:59:23'),
(2, 'subtask2 202', 'tsbtask2 202', '2021-05-16T05:35:54.974Z', 8, 0, 1, '2021-05-16 05:36:08', '2021-05-16 08:58:15'),
(3, 'newssu', 'newsub', '2021-05-16T05:36:09.245Z', 6, 0, 1, '2021-05-16 05:36:30', '2021-05-16 09:51:41'),
(4, 'qqqw1', 'asdqq1', '2021-05-16T05:43:34.543Z', 5, 0, 0, '2021-05-16 05:43:57', '2021-05-16 05:43:57'),
(5, 'dfdffd ', 'dfdfdff', '2021-05-16T07:29:56.620Z', 6, 0, 1, '2021-05-16 07:30:08', '2021-05-16 09:51:42'),
(6, 'new sub task Added', 'sdasdasd', '2021-05-21T07:30:57.483Z', 5, 0, 0, '2021-05-16 07:31:15', '2021-05-16 07:31:15'),
(7, 'subtask 1 1', 'subtask 1', '2021-05-16T09:00:57.535Z', 11, 1, 1, '2021-05-16 09:01:20', '2021-05-16 09:12:37');

-- --------------------------------------------------------

--
-- Table structure for table `Tasks`
--

CREATE TABLE `Tasks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `taskName` varchar(255) DEFAULT NULL,
  `dateAndTime` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Tasks`
--

INSERT INTO `Tasks` (`id`, `name`, `taskName`, `dateAndTime`, `createdAt`, `updatedAt`) VALUES
(1, 's', 'sd', '2021-05-15 17:37:26', '2021-05-15 17:37:38', '2021-05-15 17:37:38'),
(2, 'v', 'sd', '2021-05-03 23:35:00', '2021-05-15 17:38:30', '2021-05-15 17:38:30'),
(3, 'sdsd', 'asdsads', '2021-04-27 18:09:50', '2021-05-15 18:11:27', '2021-05-15 18:11:27'),
(4, 'sdsds', 'sdasdsad', '2020-12-30 18:12:00', '2021-05-15 18:12:16', '2021-05-15 18:12:16'),
(5, 'testing', 'sdaas', '2021-04-28 18:14:19', '2021-05-15 18:15:43', '2021-05-15 18:15:43'),
(6, 'testing', 'sdaas', '2021-04-28 18:14:19', '2021-05-15 18:17:21', '2021-05-15 18:17:21'),
(7, 'ddsada', 'sdasdasd', '2021-05-15 18:17:50', '2021-05-15 18:17:58', '2021-05-15 18:17:58'),
(8, 'new task', 'rere', '2021-05-16 02:53:16', '2021-05-16 02:54:34', '2021-05-16 02:54:34'),
(9, 'new Task', 'Check new task name', '2021-05-16 08:05:08', '2021-05-16 08:06:22', '2021-05-16 08:06:22'),
(10, 'as', 'as', '2021-05-16 08:06:22', '2021-05-16 08:07:41', '2021-05-16 08:07:41'),
(11, 'new test task', 'new test task', '2021-05-06 08:59:21', '2021-05-16 09:00:50', '2021-05-16 09:00:50');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `fullName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'John Doe', 'test@mail.com', 'Test@123', '2021-05-15 15:56:38', '2021-05-15 15:56:38'),
(2, 'test101', 'test101@mail.com', '$2a$08$U1Me0gMVcy3XB5jX.RZu8uaiNnmKBGkfHfeukSrxZ.8SRsWxs1246', '2021-05-15 15:59:54', '2021-05-15 15:59:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Subtasks`
--
ALTER TABLE `Subtasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `taskId` (`taskId`);

--
-- Indexes for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Subtasks`
--
ALTER TABLE `Subtasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Tasks`
--
ALTER TABLE `Tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Subtasks`
--
ALTER TABLE `Subtasks`
  ADD CONSTRAINT `Subtasks_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `Tasks` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
