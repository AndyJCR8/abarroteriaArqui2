-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bddiariovivir
CREATE DATABASE IF NOT EXISTS `bddiariovivir` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bddiariovivir`;

-- Volcando estructura para tabla bddiariovivir.tbldetallefactura
CREATE TABLE IF NOT EXISTS `tbldetallefactura` (
  `IdDetalleFact` int(11) NOT NULL AUTO_INCREMENT,
  `Cantidad` int(11) NOT NULL,
  `SubTotal` float NOT NULL,
  `PrecioCompre` int(11) NOT NULL,
  `IdEncabezadoFact` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  PRIMARY KEY (`IdDetalleFact`),
  KEY `IdEncabezadoFact` (`IdEncabezadoFact`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `tbldetallefactura_ibfk_1` FOREIGN KEY (`IdEncabezadoFact`) REFERENCES `tblencabezadofact` (`IdEncabezadoFact`),
  CONSTRAINT `tbldetallefactura_ibfk_2` FOREIGN KEY (`IdProducto`) REFERENCES `tblproducto` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tbldetallefactura: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tblencabezadofact
CREATE TABLE IF NOT EXISTS `tblencabezadofact` (
  `IdEncabezadoFact` int(11) NOT NULL AUTO_INCREMENT,
  `Num_Factura` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `NombreCliente` varchar(250) NOT NULL,
  `Nit` varchar(25) NOT NULL,
  `Total` float NOT NULL,
  `TipoFactura` int(11) NOT NULL,
  `IdProveedor` int(11) NOT NULL,
  PRIMARY KEY (`IdEncabezadoFact`),
  KEY `IdProveedor` (`IdProveedor`),
  CONSTRAINT `tblencabezadofact_ibfk_1` FOREIGN KEY (`IdProveedor`) REFERENCES `tblproveedor` (`IdProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tblencabezadofact: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tblproducto
CREATE TABLE IF NOT EXISTS `tblproducto` (
  `IdProducto` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(250) NOT NULL,
  `Descripcion` varchar(250) NOT NULL,
  `PrecioCosto` float NOT NULL,
  `PrecioVenta` float NOT NULL,
  `Eliminado` int(11) NOT NULL,
  `IdtipoProducto` int(11) NOT NULL,
  PRIMARY KEY (`IdProducto`),
  KEY `IdtipoProducto` (`IdtipoProducto`),
  CONSTRAINT `tblproducto_ibfk_1` FOREIGN KEY (`IdtipoProducto`) REFERENCES `tbltipoproducto` (`IdTipoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tblproducto: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tblproductosucursal
CREATE TABLE IF NOT EXISTS `tblproductosucursal` (
  `IdProductoSucursal` int(11) NOT NULL AUTO_INCREMENT,
  `FechaVencimiento` date NOT NULL,
  `Existencias` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  `IdSucursal` int(11) NOT NULL,
  PRIMARY KEY (`IdProductoSucursal`),
  KEY `IdProducto` (`IdProducto`),
  KEY `IdSucursal` (`IdSucursal`),
  CONSTRAINT `tblproductosucursal_ibfk_1` FOREIGN KEY (`IdProducto`) REFERENCES `tblproducto` (`IdProducto`),
  CONSTRAINT `tblproductosucursal_ibfk_2` FOREIGN KEY (`IdSucursal`) REFERENCES `tblsucursal` (`IdSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tblproductosucursal: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tblproveedor
CREATE TABLE IF NOT EXISTS `tblproveedor` (
  `IdProveedor` int(11) NOT NULL AUTO_INCREMENT,
  `NombrProveedor` varchar(250) NOT NULL,
  `Telefono` varchar(25) NOT NULL,
  `Correo` varchar(250) NOT NULL,
  `NombreEncargado` varchar(250) NOT NULL,
  `IdTióProveedor` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  PRIMARY KEY (`IdProveedor`),
  KEY `IdTióProveedor` (`IdTióProveedor`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `tblproveedor_ibfk_1` FOREIGN KEY (`IdTióProveedor`) REFERENCES `tbltipoproveedor` (`IdTióProveedor`),
  CONSTRAINT `tblproveedor_ibfk_2` FOREIGN KEY (`IdProducto`) REFERENCES `tblproducto` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tblproveedor: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tblsucursal
CREATE TABLE IF NOT EXISTS `tblsucursal` (
  `IdSucursal` int(11) NOT NULL AUTO_INCREMENT,
  `NombreSucursal` varchar(250) NOT NULL,
  `Ubicacion` varchar(250) NOT NULL,
  `Eliminado` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  PRIMARY KEY (`IdSucursal`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `tblsucursal_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `tblusuario` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tblsucursal: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tbltipoproducto
CREATE TABLE IF NOT EXISTS `tbltipoproducto` (
  `IdTipoProducto` int(11) NOT NULL AUTO_INCREMENT,
  `TipoProducto` varchar(250) NOT NULL,
  PRIMARY KEY (`IdTipoProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tbltipoproducto: ~0 rows (aproximadamente)
INSERT INTO `tbltipoproducto` (`IdTipoProducto`, `TipoProducto`) VALUES
	(1, 'Comida');

-- Volcando estructura para tabla bddiariovivir.tbltipoproveedor
CREATE TABLE IF NOT EXISTS `tbltipoproveedor` (
  `IdTióProveedor` int(11) NOT NULL AUTO_INCREMENT,
  `TipoPtoveedor` varchar(250) NOT NULL,
  PRIMARY KEY (`IdTióProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tbltipoproveedor: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tbltipousuario
CREATE TABLE IF NOT EXISTS `tbltipousuario` (
  `IdTipoUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `TipoUsuario` varchar(250) NOT NULL,
  PRIMARY KEY (`IdTipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tbltipousuario: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bddiariovivir.tblusuario
CREATE TABLE IF NOT EXISTS `tblusuario` (
  `IdUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(250) NOT NULL,
  `Contraseña` varchar(250) NOT NULL,
  `Correo` varchar(250) NOT NULL,
  `Eliminado` int(11) NOT NULL,
  `IdTipoUsuario` int(11) NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  KEY `IdTipoUsuario` (`IdTipoUsuario`),
  CONSTRAINT `tblusuario_ibfk_1` FOREIGN KEY (`IdTipoUsuario`) REFERENCES `tbltipousuario` (`IdTipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bddiariovivir.tblusuario: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
