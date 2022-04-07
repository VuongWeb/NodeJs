import { Router } from 'express';
import { create, list, read, remove } from '../controllers/category';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get("/categories", checkAuth, list);
router.post('/category', checkAuth, create);
router.delete('/category/:id', remove);
router.get('/category/:slug', checkAuth, read);
export default router