import express from "express";
import { First, saveProduct, tokenGenerate } from "../controller/task.controller.js";
import { tokenVerification } from "../middleware/tokenVerification.js";

const router = express.Router();

router.post("/user",First);
router.post("/tokengenerate",tokenGenerate);
router.post("/saveproduct",tokenVerification,saveProduct);

export default router;