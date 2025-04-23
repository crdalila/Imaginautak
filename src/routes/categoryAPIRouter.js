import {Router} from "express";
import categoryAPIController from "../controllers/category/categoryAPIController.js";

const router = Router();

router.get("/", categoryAPIController.getAll);

router.post("/crear", categoryAPIController.create);

router.post("/:id/eliminar", categoryAPIController.remove);

router.post("/:id", categoryAPIController.edit);

router.get("/:id", categoryAPIController.getByID);

export default router;