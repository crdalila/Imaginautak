import {Router} from "express";
import projectAPIController from "../controllers/project/projectAPIController.js";

const router = Router();

router.get("/", projectAPIController.getAll);

router.post("/", projectAPIController.create);

router.post("/:id/delete", projectAPIController.remove);

router.post("/:id", projectAPIController.edit);

router.get("/:id", projectAPIController.getByID);

export default router;