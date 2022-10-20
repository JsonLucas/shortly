import { Router } from "express";
import { getUrlsByUserIdController, signInController, signUpController } from "../../controllers/usersController";
import { authMiddlware, validateSignInMiddleware, validateSignUpMiddleware } from "../../middlewares/usersMiddleware";

const usersRoutes = Router();
usersRoutes.post('/signup', validateSignUpMiddleware, signUpController);
usersRoutes.post('/signin', validateSignInMiddleware, signInController);
usersRoutes.get('/users/:id', authMiddlware, getUrlsByUserIdController);

export default usersRoutes;
