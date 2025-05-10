import {Router} from "express";
import fanAPIController from "../controllers/fan/fanAPIController.js"
import { isLoggedInAPI } from "../middleware/authMiddleware.js";
import { uploadFanImg } from "../middleware/multer.js";

const router = Router();

router.post("/", isLoggedInAPI, uploadFanImg, fanAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI, fanAPIController.remove);

router.put("/:id", isLoggedInAPI, uploadFanImg, fanAPIController.edit);

router.get("/:id", isLoggedInAPI, fanAPIController.getByID);

export default router;