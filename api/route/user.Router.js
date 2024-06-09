import express from "express";
import { DeleteUser, UpdateUser, getUser, getUsers, savepost,profilePosts } from "../controller/user.Controller.js";
import { verifyToken } from "../middleware/verifytoken.js";
const router =express.Router();


router.get("/",getUsers)
router.get("/:id",verifyToken,getUser)
router.put("/:id",verifyToken,UpdateUser)
router.delete("/:id",verifyToken,DeleteUser)
router.post("/save",verifyToken,savepost)
router.post("/profilePost",verifyToken,profilePosts)


export default router;