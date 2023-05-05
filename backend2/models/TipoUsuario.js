import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"

const tipoUsuario = db.define("tbltipousuario", {
  IdTipoUsuario: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TipoUsuario: {
    type: dt.STRING,
    allowNull: false
  }

}, {
  tableName: "tbltipousuario",
  freezeTableName: true,
  timestamps: false
})

export default tipoUsuario;