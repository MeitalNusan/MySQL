import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import {DB_HOST, DB_NAME,DB_PASSWORD,DB_USER,DB_PORT, MYSQL_PUBLIC_URL} from "../config.js"


const db = new Sequelize("db_always", "root", "", {
  host:DB_HOST,
  user:DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME,
  dialect: "mysql",   
  url: MYSQL_PUBLIC_URL
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