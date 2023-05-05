import { Sequelize, DataTypes } from "sequelize"
import db from "../database/db.js"

const tipoProducto = db.define("tbltipoproducto", {
  IdTipoProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TipoProducto: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "tbltipoproducto",
  freezeTableName: true,
  timestamps: false
})

export default tipoProducto;