import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"
import tipoProducto from "./TipoProducto.js";

const producto = db.define("tblproducto", {
  IdProducto: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: dt.STRING,
    allowNull: false
  },
  Descripcion: {
    type: dt.STRING,
    allowNull: false
  },
  PrecioCosto: {
    type: dt.FLOAT,
    allowNull: false
  },
  PrecioVenta: {
    type: dt.FLOAT,
    allowNull: false
  },
  Eliminado: {
    type: dt.INTEGER,
    allowNull: false
  },
  IdTipoProducto: {
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: tipoProducto,
      key: "id"
    }
  }
}, {
  tableName: "tblproducto",
  freezeTableName: true,
  timestamps: false
})

tipoProducto.hasMany(producto, {foreignKey: "IdProducto"})
producto.belongsTo(tipoProducto, {foreignKey: "IdProducto"})

export default producto;