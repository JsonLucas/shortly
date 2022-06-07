import { Router } from "express";
import signInController from "../../controllers/signInController.js";

const signIn = Router();
signIn.post('/signin', signInController);

export default signIn;