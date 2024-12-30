import express from "express";
import cors from "cors";
import db from "./database/db.js";  
import postRoutes from "./Routes/postRoutes.js";
import imgRoutes from "./Routes/imgRoutes.js";
import homeImgRoutes from "./Routes/homeImgRoutes.js";
import mellisImg from "./Routes/mellisImg.js";
import adidas from "./Routes/adidas.js";
import fila from "./Routes/fila.js";
import olympikus from "./Routes/olympikus.js";
import newb from "./Routes/newb.js";
import athix from "./Routes/athix.js";
import diadora from "./Routes/diadora.js";
import carrousel from "./Routes/carrousel.js";
import path from "path";
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

const corsOptions = {
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
    allowedHeaders: ['Content-Type', 'Authorization']  
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());


const dbImagesPath = path.join(__dirname, 'dbimages');
app.use(express.static(dbImagesPath));


app.use("/api/post", postRoutes);
app.use("/api/img", imgRoutes);
app.use("/api/homeImg", homeImgRoutes);
app.use("/api/mellisImg", mellisImg);
app.use("/api/adidas", adidas);
app.use("/api/fila", fila);
app.use("/api/olympikus", olympikus);
app.use("/api/newb", newb);
app.use("/api/athix", athix);
app.use("/api/diadora", diadora);
app.use("/api/carrousel", carrousel);

 const conexionDb = async () => {
    try {
        await db.authenticate();  
        console.log("Conectado a la db");
    } catch (error) {
        console.log(`No se pudo conectar por: ${error}`);
    }
};

 app.listen(port, () => {
    conexionDb();
    console.log(`Server funcionando en el puerto ${port}`);
});
