import {Router} from "express";
import fanAPIController from "../controllers/fan/fanAPIController.js"

const router = Router();


router.post("/crear", fanAPIController.create);

router.post("/:id/eliminar", fanAPIController.remove);

router.post("/:id", fanAPIController.edit);

router.get("/:id", fanAPIController.getByID);


export default router;