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

router.get("/", async (req, res) => {
    try {
        const images = await Image.findAll();
        res.json(images);
    } catch (err) {
        console.error("Error al obtener las imágenes:", err);
        res.status(500).send("Error del servidor: no se pudieron obtener las imágenes.");
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const image = await Image.findByPk(id);
        if (!image) {
            return res.status(404).json({ message: "No se encontró la imagen." });
        }
        res.json(image);
    } catch (err) {
        console.error("Error al obtener la imagen:", err);
        res.status(500).send("Error del servidor: no se pudo obtener la imagen.");
    }
});
router.post("/", fileUpload, async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No se proporcionó ninguna imagen." });
        }

        const { mimetype, originalname, filename } = req.file;
        const data = fs.readFileSync(path.join(__dirname, './images/' + filename));

        const newImage = await Image.create({
            name: originalname,
            type: mimetype,
            data: data
        });

        res.json({ message: "Imagen subida correctamente.", image: newImage });
    } catch (err) {
        console.error("Error al subir la imagen:", err);
        res.status(500).send("Error del servidor: no se pudo subir la imagen.");
    }
});


router.put("/:id", fileUpload, async (req, res) => {
    const { id } = req.params;

    try {
        const { name } = req.body;
        const updateData = { name };

        if (req.file) {
            const { mimetype, originalname, filename } = req.file;
            const data = fs.readFileSync(path.join(__dirname, "./images/" + filename));
            updateData.type = mimetype;
            updateData.name = originalname;
            updateData.data = data;
        }

        const result = await Image.update(updateData, {
            where: { id },
        });

        if (result[0] === 0) {
            return res.status(404).json({ message: "No se encontró la imagen para actualizar." });
        }

        res.json({ message: "Imagen actualizada correctamente." });
    } catch (err) {
        console.error("Error al actualizar la imagen:", err);
        res.status(500).send("Error del servidor: no se pudo actualizar la imagen.");
    }
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Image.destroy({
            where: { id },
        });

        if (result === 0) {
            return res.status(404).json({ message: "No se encontró la imagen para eliminar." });
        }

        res.json({ message: "Imagen eliminada correctamente." });
    } catch (err) {
        console.error("Error al eliminar la imagen:", err);
        res.status(500).send("Error del servidor: no se pudo eliminar la imagen.");
    }
});

export default router;
