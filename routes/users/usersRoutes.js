import { Router } from "express";
import logoutController from "../../controllers/logoutController.js";
import signInController from "../../controllers/signInController.js";
import signUpController from "../../controllers/signUpController.js";
import usersByIdController from "../../controllers/usersByIdController.js";
import logoutMiddleware from "../../middlewares/logoutMiddleware.js";
import signInMiddleware from "../../middlewares/signInMiddleware.js";
import usersByIdMiddleware from "../../middlewares/usersByIdMiddleware.js";

const usersRoutes = Router();
usersRoutes.post('/signup', signUpController);
usersRoutes.post('/signin', signInMiddleware, signInController);
usersRoutes.delete('/logout', logoutMiddleware, logoutController);
usersRoutes.get('/users/:id', usersByIdMiddleware, usersByIdController);

export default usersRoutes;
