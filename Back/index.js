import express from "express";
import cors from "cors";
import db from "./database/db.js"; // Asegúrate de que este archivo y configuración sean correctos
import postRoutes from "./Routes/postRoutes.js";
import imgRoutes from "./Routes/imgRoutes.js";
import homeImgRoutes from "./Routes/homeImgRoutes.js";
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

 

  
const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
const dbImagesPath = path.join(__dirname, 'dbimages');
app.use(express.static(dbImagesPath));


app.use("/post", postRoutes);
app.use("/img", imgRoutes);
app.use("/homeImg", homeImgRoutes);

const conexionDb = async () => {
    try {
        await db.authenticate(); // Asegúrate de que db es una instancia de Sequelize
        console.log("Conectado a la db");
    } catch (error) {
        console.log(`No se pudo conectar por: ${error}`);
    }
};

app.listen(port, () => {
    conexionDb();
    console.log(`Server funcionando en el puerto ${port}`);
});
