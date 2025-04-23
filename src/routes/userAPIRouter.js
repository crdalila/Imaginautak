import {Router} from "express";
import userAPIController from "../controllers/user/userAPIController.js"

const router = Router();

router.post("/:id/eliminar",userAPIController.remove)

router.get("/:id",userAPIController.getByID)

router.post("/:id",userAPIController.edit)


export default router;