import { Router } from "express";
import signUpController from "../../controllers/signUpController.js";

const signUp = Router();
signUp.post('/signup', signUpController);

export default signUp;