SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;

CREATE DATABASE `carrito` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci;
USE `carrito`;

CREATE TABLE IF NOT EXISTS `articulos` (
  `id` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

INSERT INTO `articulos` (`id`, `nombre`, `precio`, `stock`, `imagen`, `descripcion`) VALUES
('i1', 'Reloj 1', 20.00, 10, 'img/reloj1.jpg', 'descripción del reloj 1'),
('i10', 'Camiseta 5', 25.00, 50, 'img/camiseta5.jpg', 'descripción de la camiseta 5'),
('i2', 'Reloj 2', 24.00, 5, 'img/reloj2.jpg', 'descripción del reloj 2'),
('i3', 'Reloj 3', 18.00, 84, 'img/reloj3.jpg', 'descripción del reloj 3'),
('i4', 'Reloj 4', 30.00, 15, 'img/reloj4.jpg', 'descripción del reloj 4'),
('i5', 'Reloj 5', 28.00, 7, 'img/reloj5.jpg', 'descripción del reloj 5'),
('i6', 'Camiseta 1', 20.00, 76, 'img/camiseta1.jpg', 'descripción de la camiseta 1'),
('i7', 'Camiseta 2', 30.00, 0, 'img/camiseta2.jpg', 'descripción de la camiseta 2'),
('i8', 'Camiseta 3', 15.00, 55, 'img/camiseta3.jpg', 'descripción de la camiseta 3'),
('i9', 'Camiseta 4', 18.00, 20, 'img/camiseta4.jpg', 'descripción de la camiseta 4');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
