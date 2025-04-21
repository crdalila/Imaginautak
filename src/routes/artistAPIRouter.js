import {Router} from "express";
import artistAPIController from "../controllers/artist/artistAPIController.js";

const router = Router();

router.get("/", artistAPIController.getAll);

router.post("/", artistAPIController.create);

router.post("/:id/delete", artistAPIController.remove);

router.post("/:id", artistAPIController.edit);

router.get("/:id", artistAPIController.getByID);

export default router;