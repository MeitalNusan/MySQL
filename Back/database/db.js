import {Sequelize} from "sequelize"

//nombre de la db, user, contraseña, donde esta alojado, lenguaje, puerto//
const db = new Sequelize("db_always", "root","",{
    host: "localhost",
    dialect:"mysql",
    port:3306
})

export default db
 