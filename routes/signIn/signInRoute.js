import { Router } from "express";
import signInController from "../../controllers/signInController.js";
import signInMiddleware from "../../middlewares/signInMiddleware.js";

const signIn = Router();
signIn.post('/signin', signInMiddleware, signInController);

export default signIn;