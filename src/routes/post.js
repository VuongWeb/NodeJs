import { Router } from "express";
import { create, list, remove, update } from "../controllers/post";

const router = Router();
router.post("/post",create);
router.get("/posts",list);
router.delete("/post/:id",remove);
router.put("/post/:id",update);



export default router;