import {Router} from "express";
import categoryAPIController from "../controllers/category/categoryAPIController.js";
import { isLoggedInAPI } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", categoryAPIController.getAll);

router.post("/crear", isLoggedInAPI, categoryAPIController.create);

router.delete("/:id/eliminar", isLoggedInAPI,categoryAPIController.remove);

router.put("/:id", isLoggedInAPI, categoryAPIController.edit);

router.get("/:id", categoryAPIController.getByID);

export default router;