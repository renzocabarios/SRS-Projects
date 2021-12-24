import { getAllUser } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getAllUser);

export default router;
