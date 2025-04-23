import {Router} from "express";
import fanAPIController from "../controllers/fan/fanAPIController.js"
import { isLoggedInAPI } from "../middleware/authMiddleware.js";

const router = Router();


router.post("/crear", isLoggedInAPI, fanAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI, fanAPIController.remove);

router.put("/:id", isLoggedInAPI, fanAPIController.edit);

router.get("/:id", isLoggedInAPI, fanAPIController.getByID);

export default router;