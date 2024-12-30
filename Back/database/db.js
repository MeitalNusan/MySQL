import {Sequelize} from "sequelize"


const db = new Sequelize(
    process.env.DB_NAME,      // Nombre de la base de datos
    process.env.DB_USER,      // Usuario de la base de datos
    process.env.DB_PASSWORD,  // Contraseña de la base de datos
    {
      host: process.env.DB_HOST,   // Dirección del servidor de la base de datos
      dialect: "mysql",
      port: process.env.DB_PORT || 3306  // El puerto (3306 es el predeterminado para MySQL)
    }
  );


//nombre de la db, user, contraseña, donde esta alojado, lenguaje, puerto//
// const db = new Sequelize("db_always", "root","",{
//     host: "localhost",
//     dialect:"mysql",
//     port:3306
// })

export default db
 