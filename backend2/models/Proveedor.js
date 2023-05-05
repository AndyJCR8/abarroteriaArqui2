import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"
import tipoProveedor from "./TipoProveedor.js";
import producto from "./Producto.js";

const proveedor = db.define("tblproveedor", {
  IdProveedor: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  NombrProveedor: {
    type: dt.STRING,
    allowNull: false
  },
  Telefono: {
    type: dt.STRING,
    allowNull: false
  },
  Correo: {
    type: dt.STRING,
    allowNull: false
  },
  NombreEncargado: {
    type: dt.STRING,
    allowNull: false
  },
  IdTióProveedor: {
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: tipoProveedor,
      key: "id"
    }
  },
  IdProducto: {
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: producto,
      key: "id"
    }
  }

}, {
  tableName: "tblproveedor",
  freezeTableName: true,
  timestamps: false
})

tipoProveedor.hasMany(proveedor, {foreignKey: "IdTióProveedor"})
producto.hasMany(proveedor, {foreignKey: "IdProducto"})

proveedor.belongsTo(tipoProveedor, {foreignKey: "IdTióProveedor"})
proveedor.belongsTo(producto, {foreignKey: "IdProducto"})

export default proveedor;