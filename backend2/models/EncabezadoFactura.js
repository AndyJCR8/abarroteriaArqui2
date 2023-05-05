import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"
import proveedor from "./Proveedor.js";

const encabezadoFactura = db.define("tblencabezadofact", {
  IdEncabezadoFact: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Num_Factura: {
    type: dt.INTEGER,
    allowNull: false
  },
  Fecha: {
    type: dt.DATE,
    allowNull: false
  },
  NombreCliente: {
    type: dt.STRING,
    allowNull: false
  },
  Nit: {
    type: dt.STRING,
    allowNull: false
  },
  Total: {
    type: dt.FLOAT,
    allowNull: false
  },
  TipoFactura: {
    type: dt.INTEGER,
    allowNull: false
  },
  IdProveedor: {
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: proveedor,
      key: "id"
    }
  }

}, {
  tableName: "tblencabezadofact",
  freezeTableName: true,
  timestamps: false
})

proveedor.hasMany(encabezadoFactura, {foreignKey: "IdProveedor"})
encabezadoFactura.belongsTo(proveedor, {foreignKey: "IdProveedor"})

export default encabezadoFactura;