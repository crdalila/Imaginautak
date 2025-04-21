import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";
import fanAPIRouter from "./fanAPIRouter.js";
import artistAPIRouter from "./artistAPIRouter.js";

const router = Router();

router.use("/usuario",userAPIRouter);
router.use("/fan", fanAPIRouter);
router.use("/artistas", artistAPIRouter);

export default router;