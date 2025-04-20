import { Router } from "express";
import APIRouter from "./APIRouter.js";

const router = Router();

router.use("/", APIRouter);

export default router