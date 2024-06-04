import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { getAllImg, getImg, createImg, updateImg, deleteImg } from "../controllers/imgController.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, './images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-monkeiwit-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image');

router.get("/", getAllImg);
router.get("/:id", getImg);
router.post("/", fileUpload, (req, res) => {
    console.log(req.file);
    // createImg 
});
router.put("/:id", updateImg);
router.delete("/:id", deleteImg);

export default router;
