import {Router} from "express";
import fanAPIController from "../controllers/fan/fanAPIController.js"
import { isLoggedInAPI } from "../middleware/authMiddleware.js";
import { isFanAPI } from "../middleware/rolesMiddleware.js";

const router = Router();


router.post("/crear", isLoggedInAPI, isFanAPI, fanAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI, isFanAPI, fanAPIController.remove);

router.put("/:id", isLoggedInAPI, isFanAPI, fanAPIController.edit);

router.get("/:id", isLoggedInAPI, fanAPIController.getByID);

export default router;