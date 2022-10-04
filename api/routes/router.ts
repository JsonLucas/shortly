import { Router } from 'express';
import urlRoutes from './url/urlRoutes';
import usersRoutes from './users/usersRoutes';

const router = Router();
router.use(usersRoutes);
router.use(urlRoutes);

export default router;