import {Router} from "express";
import userAPIController from "../controllers/user/userAPIController.js"
import { isLoggedInAPI } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/nombredeusuario/:username", isLoggedInAPI, userAPIController.getByUsername)

router.delete("/:id/eliminar", isLoggedInAPI, userAPIController.remove)

router.get("/:id", isLoggedInAPI, userAPIController.getByID)

router.put("/:id", isLoggedInAPI, userAPIController.edit)

export default router;