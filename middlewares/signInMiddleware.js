import { getUserByEmail } from "../database/queries/retrieve/users.js";
import { decryptPassword } from "../utils/passwordCrypt.js";
import { validateSignIn } from "../utils/validationFunctions.js";

const signInMiddleware = async (req, res, next) => {
    const { body } = req;
    try{
        const validation = validateSignIn(body);
        if(validation.status){
            const { email, password } = body;
            const { rows } = await getUserByEmail(email);
            const comparePasswords = decryptPassword(password, rows[0].password);
            if(comparePasswords){
                res.locals.userId = rows[0].id;
                res.locals.email = rows[0].email;
                next();
                return;
            }
            res.status(401).send('incorrect password');
            return;
        }
        res.status(422).send(validation.error.details);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signInMiddleware;