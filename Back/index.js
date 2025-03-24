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
const port = process.env.PORT || 8000;

// ✅ CORS Configurado correctamente
const corsOptions = {
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
    allowedHeaders: ['Content-Type', 'Authorization']  
};

app.use(cors(corsOptions));  // ✅ Usa las opciones correctamente
app.options('*', cors(corsOptions));

app.use(express.json());

// ✅ Asegurar que la carpeta de imágenes existe antes de servir estáticos
const dbImagesPath = path.join(__dirname, 'dbimages');
import fs from 'fs';
if (fs.existsSync(dbImagesPath)) {
    app.use(express.static(dbImagesPath));
} else {
    console.warn(`⚠️ Advertencia: La carpeta 'dbimages' no existe.`);
}

// ✅ Conectar a la base de datos antes de levantar el servidor
const startServer = async () => {
    try {
        await db.authenticate();
        console.log("✅ Conectado a la base de datos");

        // ✅ Iniciar el servidor solo si la conexión es exitosa
        app.listen(port, () => {
            console.log(`🚀 Server funcionando en el puerto ${port}`);
        });

    } catch (error) {
        console.error(`❌ No se pudo conectar a la base de datos: ${error}`);
        process.exit(1); // Terminar el proceso si falla la conexión
    }
};

// 🔹 Iniciar el servidor correctamente
startServer();

// ✅ Rutas
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
