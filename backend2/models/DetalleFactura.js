import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"
import encabezadoFactura from "./EncabezadoFactura.js";
import producto from "./Producto.js";

const detalleFactura = db.define("tbldetallefactura", {
  IdDetalleFact: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Cantidad: {
    type: dt.INTEGER,
    allowNull: false
  },
  SubTotal: {
    type: dt.FLOAT,
    allowNull: false
  },
  PrecioCompre: {
    type: dt.INTEGER,
    allowNull: false
  },
  IdEncabezadoFact: {
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: encabezadoFactura,
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
  },

}, {
  tableName: "tbldetallefactura",
  freezeTableName: true,
  timestamps: false
})

encabezadoFactura.hasMany(detalleFactura, {foreignKey: "IdEncabezadoFact"})
producto.hasMany(detalleFactura, {foreignKey: "IdProducto"})

detalleFactura.belongsTo(encabezadoFactura, {foreignKey: "IdEncabezadoFact"})
detalleFactura.belongsTo(producto, {foreignKey: "IdProducto"})

export default detalleFactura;