import {Router} from "express";
import projectAPIController from "../controllers/project/projectAPIController.js";
import { isLoggedInAPI } from "../middleware/authMiddleware.js";
import { uploadProjectImgs } from '../middleware/multer.js';

const router = Router();

router.get("/", projectAPIController.getAll);

router.post("/", isLoggedInAPI, uploadProjectImgs, projectAPIController.create);

router.get("/titulo/:title", projectAPIController.getByTitle);

router.delete("/:id/eliminar", isLoggedInAPI,  projectAPIController.remove);

router.put("/:id", isLoggedInAPI, uploadProjectImgs, projectAPIController.edit);

router.get("/:id", projectAPIController.getByID);

export default router;