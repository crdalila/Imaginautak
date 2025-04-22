import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";
import fanAPIRouter from "./fanAPIRouter.js";
import artistAPIRouter from "./artistAPIRouter.js";
import projectAPIRouter from "./projectAPIRouter.js";

const router = Router();

router.use("/usuario",userAPIRouter);
router.use("/fan", fanAPIRouter);
router.use("/artistas", artistAPIRouter);
router.use("/proyectos", projectAPIRouter);

export default router;