import { encryptPassword } from "../utils/passwordCrypt.js";
import { validateSignUp } from "../utils/validationFunctions.js";
import createUser from "../database/queries/create/users.js";

const signUpController = async (req, res) => {
    try{
        const { body } = req;
        const validation = validateSignUp(body);
        if(validation.status){
            const { name, email, password } = body;
            const encryptedPassword = encryptPassword(password);
            await createUser({name, email, password: encryptedPassword});
            res.sendStatus(201);
        }else{
            res.status(422).send(validation.error.details);
        }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signUpController;