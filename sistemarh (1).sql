-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2022 a las 21:33:44
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemarh`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `ADMIN_ID` int(11) NOT NULL,
  `ADMIN_USER` varchar(50) DEFAULT NULL,
  `ADMIN_EMAIL` varchar(100) DEFAULT NULL,
  `ADMIN_PASSWORD` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `ADMIN_USER`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`) VALUES
(1, 'alan', 'alan@gmail.com', '1234'),
(2, 'diego', 'diego@gmail.com', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `EMP_ID` int(11) NOT NULL,
  `EMP_NAME` varchar(50) DEFAULT NULL,
  `EMP_LASTNAME` varchar(50) DEFAULT NULL,
  `EMP_PHONE` varchar(10) DEFAULT NULL,
  `EMP_EMAIL` varchar(100) DEFAULT NULL,
  `EMP_ADDRESS` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`EMP_ID`, `EMP_NAME`, `EMP_LASTNAME`, `EMP_PHONE`, `EMP_EMAIL`, `EMP_ADDRESS`) VALUES
(1, 'Juanito', 'Retana', '4421565423', 'beiruc@gmail.com', 'El pueblito'),
(2, 'Leo', 'Dan', '4421565824', 'leuki@gmail.com', 'Guanatos'),
(3, 'Oswal', 'De Paco', '4421565925', 'oswal@gmail.com', 'San Juan del River'),
(5, 'Fernando', 'Lopez', '4421845831', 'fernando@gmail.com', 'Jalisco'),
(10, 'Armando', 'Martinez', '4425639850', 'armando@gmail.com', 'Las Américas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ADMIN_ID`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`EMP_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `EMP_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
