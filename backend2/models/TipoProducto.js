import { Sequelize, DataTypes as dt} from "sequelize"
import db from "../database/db.js"

const tipoProducto = db.define("tbltipoproducto", {
  IdTipoProducto: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TipoProducto: {
    type: dt.STRING,
    allowNull: false
  }
}, {
  tableName: "tbltipoproducto",
  freezeTableName: true,
  timestamps: false
})

export default tipoProducto;