import {Router} from "express";
import fanAPIController from "../controllers/fan/fanAPIController.js"

const router = Router();


router.get("/:id",fanAPIController.getByID)

router.post("/:id",fanAPIController.edit)


export default router;