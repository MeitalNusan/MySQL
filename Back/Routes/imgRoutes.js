import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import Image from "../models/imgModel.js"; // Asegúrate de tener el modelo Image configurado

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const diskstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, './images');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-monkeiwit-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image');

router.post("/", fileUpload, async (req, res) => {
    if (!req.file) {
        return res.status(400).send("No se ha subido ningún archivo.");
    }

    try {
        const { mimetype, originalname, filename } = req.file;
        const data = fs.readFileSync(path.join(__dirname, "./images/" + filename));

        await Image.create({ type: mimetype, name: originalname, data });

        res.send("¡Imagen guardada exitosamente!");
    } catch (err) {
        console.error("Error al guardar la imagen en la base de datos:", err);
        res.status(500).send("Error del servidor: no se pudo guardar la imagen en la base de datos.");
    }
});

export default router;
