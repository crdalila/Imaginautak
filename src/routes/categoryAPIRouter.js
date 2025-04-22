import {Router} from "express";
import categoryAPIController from "../controllers/category/categoryAPIController.js";

const router = Router();

router.get("/", categoryAPIController.getAll);

router.post("/", categoryAPIController.create);

router.post("/:id/delete", categoryAPIController.remove);

router.post("/:id", categoryAPIController.edit);

router.get("/:id", categoryAPIController.getByID);

export default router;