-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : database
-- Généré le : lun. 25 nov. 2024 à 12:30
-- Version du serveur : 9.1.0
-- Version de PHP : 8.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `travel_app`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Adventure', 'Exciting and adventurous trips', '2024-11-04 15:29:52', '2024-11-04 15:29:52'),
(2, 'Relaxation', 'Relaxing and peaceful trips', '2024-11-04 15:37:17', '2024-11-04 15:37:17'),
(3, 'Cultural', 'Trips to explore different cultures', '2024-11-04 15:37:34', '2024-11-04 15:37:34'),
(4, 'Nature', 'Trips to enjoy nature and wildlife', '2024-11-04 15:37:34', '2024-11-04 15:37:34'),
(5, 'test categorie', 'test description', '2024-11-06 09:21:44', '2024-11-06 09:21:44');

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int NOT NULL,
  `pseudo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `travel_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `pseudo`, `content`, `created_at`, `travel_id`) VALUES
(8, 'Postman', 'Comment test', '2024-11-25 10:54:20', 1),
(9, 'Postman travel 2', 'Comment test', '2024-11-25 10:54:44', 2);

-- --------------------------------------------------------

--
-- Structure de la table `travel`
--

CREATE TABLE `travel` (
  `id` int NOT NULL,
  `name` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `country` varchar(128) NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `travel`
--

INSERT INTO `travel` (`id`, `name`, `city`, `country`, `image`, `description`, `createdAt`, `updatedAt`, `category_id`) VALUES
(1, 'Paris', 'Paris', 'France', 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', 'Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere.', '2024-10-22 08:00:47', '2024-11-06 09:58:02', 2),
(2, 'New York City', 'New York', 'USA', 'https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg', 'New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life.', '2024-10-22 08:00:47', '2024-11-06 09:58:09', 2),
(3, 'Tokyo', 'Tokyo', 'Japan', 'https://media.istockphoto.com/id/904453184/fr/photo/image-composite-du-mont-fuji-et-de-la-ligne-dhorizon-de-tokyo.jpg?b=1&s=612x612&w=0&k=20&c=AB66xq2ZbKINH39D9tiH08yJrY2yU9pyd4W-7fhlbKc=', 'Tokyo is a bustling metropolis with cutting-edge technology, traditional temples, and an exciting nightlife.', '2024-10-22 08:04:42', '2024-11-06 09:58:18', 3),
(4, 'Rome', 'Rome', 'Italy', 'https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg', 'Rome is a city filled with ancient history, from the Colosseum to the Roman Forum, and delicious Italian cuisine.', '2024-10-22 08:04:42', '2024-11-06 09:58:23', 3),
(5, 'Sydney', 'Sydney', 'Australia', 'https://www.planetware.com/photos-large/AUS/australia-sydney-opera-house.jpg', 'Sydney is known for its iconic Opera House, beautiful beaches, and the stunning Sydney Harbour.', '2024-10-22 08:04:42', '2024-11-06 09:58:30', 4),
(6, 'London', 'London', 'United Kingdom', 'https://media.istockphoto.com/id/526197097/fr/photo/le-parlement.jpg?b=1&s=612x612&w=0&k=20&c=BwsbuX-_EVBLvQwRwrlcN3_pCHLzWHoOiPO7YK9UREA=', 'London is a cultural hub with historic landmarks like Big Ben, the Tower of London, and a vibrant arts scene.', '2024-10-22 08:04:42', '2024-11-06 09:58:37', 2),
(7, 'Rio de Janeiro', 'Rio de Janeiro', 'Brazil', 'https://media.istockphoto.com/id/523665439/fr/photo/fête-du-rédempteur-du-christ-rédempteur-sur-rio-de-janeiro.jpg?b=1&s=612x612&w=0&k=20&c=ibNZg7qjziAnyYT8oMFFv1R4aluGzEVYZX8UKIqKX9E=', 'Rio de Janeiro is famous for its breathtaking landscapes, Christ the Redeemer statue, and its annual Carnival celebration.', '2024-10-22 08:07:19', '2024-11-06 09:58:42', 3),
(8, 'Cape Town', 'Cape Town', 'South Africa', 'https://www.planetware.com/photos-large/SAF/south-africa-cape-town-table-mountain.jpg', 'Cape Town is known for its scenic beauty, including Table Mountain and its proximity to incredible wildlife.', '2024-10-22 08:07:19', '2024-11-06 09:58:48', 3),
(9, 'Bangkok', 'Bangkok', 'Thailand', 'https://images.pexels.com/photos/13915514/pexels-photo-13915514.jpeg?auto=compress&cs=tinysrgb&w=800', 'Bangkok is a bustling city known for its ornate temples, street food, and vibrant night markets.', '2024-10-22 08:07:19', '2024-11-06 09:58:57', 3),
(10, 'Dubai', 'Dubai', 'United Arab Emirates', 'https://media.istockphoto.com/id/154918211/fr/photo/ville-de-dubaï-et-la-burj-khalifa.jpg?b=1&s=612x612&w=0&k=20&c=gkVu3ZB_eksE-V0qHRSaXCGAM4gwaxB2m8DY2tMTgNA=', 'Dubai is famous for its modern architecture, including the Burj Khalifa, luxury shopping, and desert safaris.s', '2024-10-22 08:07:19', '2024-11-06 09:59:03', 2),
(12, 'test name', 'test city', 'test country', 'https://i.ytimg.com/vi/n8fGMUweqn4/maxresdefault.jpg', 'tset', '2024-11-06 08:40:05', '2024-11-06 09:21:53', 5);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `travel` (`travel_id`);

--
-- Index pour la table `travel`
--
ALTER TABLE `travel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `travel`
--
ALTER TABLE `travel`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `travel` FOREIGN KEY (`travel_id`) REFERENCES `travel` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Contraintes pour la table `travel`
--
ALTER TABLE `travel`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
