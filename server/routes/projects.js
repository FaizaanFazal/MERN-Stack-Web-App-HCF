import express from "express";
import { addproject, deleteproject, getallprojects, getprojectbychapter, getprojectbyid, updateproject } from "../controllers/projects.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();
//create //,verifyUser add krni 
router.post("/",addproject )

//update
router.put("/:id",updateproject)
//getall
router.get("/",getallprojects)

//getby id
router.get("/:id",getprojectbyid)
//get by chapter
router.get("/chapter/:chapter",getprojectbychapter)

//delete
router.delete("/:id",deleteproject)


export default router