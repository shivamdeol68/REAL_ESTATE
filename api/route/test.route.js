import express from "express";
import { shouldBeAdmin, shouldBeloggedin } from "../controller/test.controller.js";
import { verifyToken } from "../middleware/verifytoken.js";

const router = express.Router();

router.get("/Should-Be-LoggedIn",verifyToken,shouldBeloggedin);

router.get("/Should-Be-Admin",shouldBeAdmin);


export default router;
