import express from "express";
import cors from "cors";
import db from "./database/db.js"; // Asegúrate de que este archivo y configuración sean correctos
import postRoutes from "./Routes/postRoutes.js";
import imgRoutes from "./Routes/imgRoutes.js";
import homeImgRoutes from "./Routes/homeImgRoutes.js";
import mellisImg from "./Routes/mellisImg.js"
import adidas from "./Routes/adidas.js"
import fila from "./Routes/fila.js"
import olyimpikus from "./Routes/olympikus.js"
import newb from "./Routes/newb.js"
import athix from "./Routes/athix.js"
import diadora from "./Routes/diadora.js"
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
app.use("/mellisImg", mellisImg);
app.use("/adidas", adidas);
app.use("/fila", fila);
app.use("/olyimpikus", olyimpikus);
app.use("/newb", newb);
app.use("/athix", athix);
app.use("/diadora", diadora);

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
