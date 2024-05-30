import express from "express" 


import { getAllImg, getImg, createImg, updateImg, deleteImg } from "../controllers/imgController.js"

const router = express.Router()

router.get("/",getAllImg)
router.get("/:id",getImg)
router.post("/",createImg)
router.put("/:id",updateImg)
router.delete("/:id",deleteImg)


export default router