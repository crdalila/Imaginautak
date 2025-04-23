import {Router} from "express";
import projectAPIController from "../controllers/project/projectAPIController.js";
import { isLoggedInAPI } from "../middleware/authMiddleware.js"

const router = Router();

router.get("/", projectAPIController.getAll);

router.post("/crear", isLoggedInAPI, projectAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI, projectAPIController.remove);

router.put("/:id", isLoggedInAPI, projectAPIController.edit);

router.get("/:id", projectAPIController.getByID);

export default router;