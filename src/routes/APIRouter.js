import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";
import fanAPIRouter from "./fanAPIRouter.js";

const router = Router();

router.use("/user",userAPIRouter);
router.use("/fan", fanAPIRouter);

export default router;