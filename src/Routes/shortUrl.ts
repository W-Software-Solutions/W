import express from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../Controllers/shortUrl";


const router = express.Router();


router.post("/", createUrl)
router.get("/", getAllUrl)
router.get("/:shortUrl", getUrl)
router.delete("/:id", deleteUrl)

export default router