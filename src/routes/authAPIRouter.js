import { Router } from "express";
import authApiController from "../controllers/auth/authAPIController.js";

const router = Router();

router.post("/registro", authApiController.register);
router.post("/login", authApiController.login);
router.post("/logout", authApiController.logout);

export default router;