import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";


const router = Router();

router.use("/user",userAPIRouter);

export default router;