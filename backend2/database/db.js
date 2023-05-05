import { Sequelize } from "sequelize";

//const db = new Sequelize("database_app", "andy_cr", "Admin12345^", {
//host: "172.17.223.27",
const db = new Sequelize("bddiariovivir", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default db;