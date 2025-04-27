import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";
import fanAPIRouter from "./fanAPIRouter.js";
import artistAPIRouter from "./artistAPIRouter.js";
import projectAPIRouter from "./projectAPIRouter.js";
import categoryAPIRouter from "./categoryAPIRouter.js";
import authAPIRouter from "./authAPIRouter.js";

const router = Router();

router.use("/usuario",userAPIRouter);
router.use("/fan", fanAPIRouter);
router.use("/artistas", artistAPIRouter);
router.use("/proyectos", projectAPIRouter);
router.use("/categorias", categoryAPIRouter);
router.use("/", authAPIRouter);

export default router;