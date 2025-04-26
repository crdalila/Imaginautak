import {Router} from "express";
import projectAPIController from "../controllers/project/projectAPIController.js";
import { isLoggedInAPI } from "../middleware/authMiddleware.js"
import { isArtistAPI } from "../middleware/rolesMiddleware.js";

const router = Router();

router.get("/", projectAPIController.getAll);

router.post("/crear", isLoggedInAPI, isArtistAPI, projectAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI, isArtistAPI, projectAPIController.remove);

router.put("/:id", isLoggedInAPI, isArtistAPI, projectAPIController.edit);

router.get("/:id", projectAPIController.getByID);

export default router;