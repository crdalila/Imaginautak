import {Router} from "express";
import categoryAPIController from "../controllers/category/categoryAPIController.js";
import { isLoggedInAPI, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", categoryAPIController.getAll);

router.post("/crear", isLoggedInAPI, isAdmin, categoryAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI, isAdmin, categoryAPIController.remove);

router.put("/:id", isLoggedInAPI, isAdmin, categoryAPIController.edit);

router.get("/:id", categoryAPIController.getByID);

export default router;