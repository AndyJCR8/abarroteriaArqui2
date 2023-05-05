import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"

const tipoProveedor = db.define("tbltipoproveedor", {
  IdTióProveedor: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TipoPtoveedor: {
    type: dt.STRING,
    allowNull: false
  }

}, {
  tableName: "tbltipoproveedor",
  freezeTableName: true,
  timestamps: false
})

export default tipoProveedor;