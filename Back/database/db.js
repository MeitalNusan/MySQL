import {Sequelize} from "sequelize"

//nombre de la db, user, contraseña, donde esta alojado, lenguaje, puerto//
const db = new Sequelize("db_always", "root","",{
    host: process.env.DB_HOST,
    dialect:"mysql",
    port:3306
})

export default db
 