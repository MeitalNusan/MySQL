import { Sequelize } from "sequelize";
import mysql2 from "mysql2";


const db = new Sequelize("db_always", "root", "", {
  host: "localhost",
  dialect: "mysql", 
  port: 3306,
  dialectModule: mysql2, 
});

export default db;
