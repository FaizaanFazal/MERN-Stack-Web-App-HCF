import express from "express";
import { updateuser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router=express.Router();
//update
router.put("/update/:id",verifyToken,updateuser)


export default router