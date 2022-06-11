import { Router } from 'express';
import urlRoutes from './url/urlRoutes.js';
import usersRoutes from './users/usersRoutes.js';

const router = Router();
router.use(usersRoutes);
router.use(urlRoutes);

export default router;