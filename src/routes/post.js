import { Router } from "express";
import { create } from "../controllers/post";

const router = Router();
router.post("/post",create);



export default router;