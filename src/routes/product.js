import { Router } from 'express';
import { create, get, list, paginateProducts, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middleware/checkAuth';

const router = Router();

router.get("/products", list);
router.get("/products/:id", get);
router.get("/products/paginate/:page", paginateProducts);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
// router.post('/products', create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);
router.param("userId", userById)

export default router