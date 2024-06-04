import express from "express";
import { DeleteUser, UpdateUser, getUser, getUsers, savepost } from "../controller/user.Controller.js";
import { verifyToken } from "../middleware/verifytoken.js";
const router =express.Router();


router.get("/",getUsers)
router.get("/:id",verifyToken,getUser)
router.put("/:id",verifyToken,UpdateUser)
router.delete("/:id",verifyToken,DeleteUser)
router.post("/save",verifyToken,savepost)


export default router;