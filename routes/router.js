import { Router } from 'express';
import signIn from './signIn/signInRoute.js';
import signUp from './signUp/signUpRoute.js';

const router = Router();
router.use(signUp);
router.use(signIn);

export default router;