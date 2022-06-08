import { validateSignIn } from "../utils/validationFunctions.js";

const signInMiddleware = (req, res, next) => {
    const { body } = req;
    const validation = validateSignIn(body);
    if(validation.status){
        const { email, password } = body;
        res.locals.email = email;
        res.locals.password = password;
        next();
        return;
    }
    res.status(422).send(validation.error.details);
}

export default signInMiddleware;