import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";
import {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,DB_PORT, MYSQL_PUBLIC_URL} from "../config.js"

dotenv.config();

const db = new Sequelize({
  database: process.env.DB_NAME,  
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "contraseñaAdmin",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
  dialectModule: mysql2,
  logging: false,
});
export default db;




/*
  host: "127.0.0.1",
  user:"root",
  dialect: "mysql", 
  port: 3306,
  dialectModule: mysql2, 
  
  
  
  
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  
  */