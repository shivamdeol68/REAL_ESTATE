import express from "express";
import { DeleteUser, UpdateUser, getUser, getUsers } from "../controller/user.Controller.js";
import { verifyToken } from "../middleware/verifytoken.js";
const router =express.Router();


router.get("/",getUsers)
router.get("/:id",verifyToken,getUser)
router.put("/:id",verifyToken,UpdateUser)
router.delete("/:id",verifyToken,DeleteUser)


export default router;