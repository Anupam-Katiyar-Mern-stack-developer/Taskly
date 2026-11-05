import express from "express";
import { getuserController } from "../controllers/getUser.controller.js";
import { createUserController } from "../controllers/createUser.controller.js";

const router = express.Router();

router.get("/", getuserController);
router.post("/create", createUserController);

export default router;
