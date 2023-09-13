import express from "express";
import { First, saveProduct, tokenGen, tokenGenerate, verifyUser } from "../controller/task.controller.js";
import { tokenVerification } from "../middleware/tokenVerification.js";

const router = express.Router();

router.post("/user",First);
router.post("/tokengenerate",tokenGenerate);
router.post("/saveproduct",tokenVerification,saveProduct);
// ---------------------------------------------
router.post("/getdata",tokenGen);
router.post("/verify",verifyUser);

export default router;