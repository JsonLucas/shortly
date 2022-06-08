import { Router } from 'express';
import signIn from './signIn/signInRoute.js';
import signUp from './signUp/signUpRoute.js';
import urlRoutes from './url/urlRoutes.js';

const router = Router();
router.use(signUp);
router.use(signIn);
router.use(urlRoutes);

export default router;