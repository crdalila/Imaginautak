import {Router} from "express";
import artistAPIController from "../controllers/artist/artistAPIController.js";
import { isLoggedInAPI } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", artistAPIController.getAll);

router.post("/crear", isLoggedInAPI, artistAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI,artistAPIController.remove);

router.put("/:id", isLoggedInAPI, artistAPIController.edit);

router.get("/:id", artistAPIController.getByID);

export default router;