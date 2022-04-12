import { Router } from 'express';
import { create, list, read, remove } from '../controllers/category';


const router = Router();

router.get("/categories", list);
router.post('/category', create);
router.get('/category/:id', read);
export default router