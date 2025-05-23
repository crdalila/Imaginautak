import {Router} from "express";
import artistAPIController from "../controllers/artist/artistAPIController.js";
import { isLoggedInAPI } from "../middleware/authMiddleware.js";
import { uploadArtistImgs } from "../middleware/multer.js";

const router = Router();

router.get("/", artistAPIController.getAll);

router.post("/", isLoggedInAPI, uploadArtistImgs, artistAPIController.create);

router.get("/nombre/:artistic_name", artistAPIController.getByName);

router.delete("/:id/eliminar", isLoggedInAPI, artistAPIController.remove);

router.put("/:id", isLoggedInAPI, uploadArtistImgs, artistAPIController.edit);

router.get("/:id", artistAPIController.getByID);

export default router;