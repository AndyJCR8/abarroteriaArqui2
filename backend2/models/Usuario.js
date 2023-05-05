import { Sequelize, DataTypes as dt } from "sequelize"
import db from "../database/db.js"
import tipoUsuario from "./TipoUsuario.js";

const usuario = db.define("tblusuario", {
  IdUsuario: {
    type: dt.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: dt.STRING,
    allowNull: false
  },
  Contraseña: {
    type: dt.STRING,
    allowNull: false
  },
  Correo: {
    type: dt.STRING,
    allowNull: false
  },
  Eliminado: {
    type: dt.INTEGER,
    allowNull: false
  },
  IdTipoUsuario: {
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: tipoUsuario,
      key: "id"
    }
  }

}, {
  tableName: "tblusuario",
  freezeTableName: true,
  timestamps: false
})

tipoUsuario.hasMany(usuario, {foreignKey: "IdTipoUsuario"})
usuario.belongsTo(tipoUsuario, {foreignKey: "IdTipoUsuario"})

export default usuario;