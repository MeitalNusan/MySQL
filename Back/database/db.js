import {Sequelize} from "sequelize"
import mysql2 from 'mysql2';

//nombre de la db, user, contraseña, donde esta alojado, lenguaje, puerto//
const db = new Sequelize("db_always", "root","",{
    host: "localhost",
    dialectModule: mysql2,
    port:3306
})

export default db
 