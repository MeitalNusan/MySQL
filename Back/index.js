import express from "express";
import cors from "cors";
import db from "./database/db.js";  
import postRoutes from "./Routes/postRoutes.js";
import imgRoutes from "./Routes/imgRoutes.js";
import homeImgRoutes from "./Routes/homeImgRoutes.js";
import mellisImg from "./Routes/mellisImg.js"
import adidas from "./Routes/adidas.js"
import fila from "./Routes/fila.js"
import olympikus from "./Routes/olympikus.js"
import newb from "./Routes/newb.js"
import athix from "./Routes/athix.js"
import diadora from "./Routes/diadora.js"
import carrousel from "./Routes/carrousel.js"
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

 

  
const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const corsOption = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
     
};

app.use(cors(corsOption));
app.use(express.json());
const dbImagesPath = path.join(__dirname, 'dbimages');
app.use(express.static(dbImagesPath));


app.use("/post", postRoutes);
app.use("/img", imgRoutes);
app.use("/homeImg", homeImgRoutes);
app.use("/mellisImg", mellisImg);
app.use("/adidas", adidas);
app.use("/fila", fila);
app.use("/olympikus", olympikus);
app.use("/newb", newb);
app.use("/athix", athix);
app.use("/diadora", diadora);
app.use("/carrousel", carrousel);



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
