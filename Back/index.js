import express from "express";
import cors from "cors";
import db from "./database/db.js"; // Asegúrate de que este archivo y configuración sean correctos
import postRoutes from "./Routes/postRoutes.js";
import imgRoutes from "./Routes/imgRoutes.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/post", postRoutes);
app.use("/img", imgRoutes);

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
