-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2024 at 04:15 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it3206-taskmanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `status` enum('PENDING','ONGOING','COMPLETED') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`) VALUES
(41, 'Home Movie Marathon', 'Host a movie marathon at home featuring a series of your favorite films or TV shows. ', 'COMPLETED'),
(47, 'Volunteer at an Animal Shelter', 'Spend time volunteering at an animal shelter to help care for and socialize shelter animals. ', 'COMPLETED'),
(51, 'Volunteer at a Local Charity', 'Give back to your community by volunteering your time at a local charity or nonprofit organization.', 'ONGOING'),
(64, 'Backyard Camping', 'Pitch a tent, light a campfire, and enjoy outdoor activities like stargazing, storytelling, and roasting marshmallows. ', 'COMPLETED'),
(70, 'Online Language Exchange', 'Participate in an online language exchange to practice a foreign language with native speakers. Platforms like Tandem or HelloTalk connect you with language partners from around the world, ', 'ONGOING'),
(72, 'Buy Apples', 'Go to Store, Pay Apples, Eat Apples', 'PENDING'),
(73, 'Virtual Art Class', 'Take an online art class to learn new techniques in drawing, painting, or digital art.', 'COMPLETED'),
(75, 'Virtual Photography Club', 'Start or join a virtual photography club to share your photos and get feedback from other enthusiasts.', 'PENDING'),
(76, 'Online Dance Class', 'Take an online dance class to learn new moves and stay active. ', 'PENDING'),
(77, 'Virtual Cooking Competition', 'Choose a theme or specific ingredients, and have everyone cook their dish while video chatting. ', 'ONGOING');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
