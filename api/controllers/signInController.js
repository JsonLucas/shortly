import { getUserByEmail } from "../database/queries/retrieve/users.js";
import { generateToken, verifyToken } from "../utils/tokenUtils.js";
import { decryptPassword } from "../utils/passwordCrypt.js";
import createSession from '../database/queries/create/sessions.js';

const signInController = async (req, res) => {
    try{
        const { userId, email } = res.locals;
        const { token, tokenKey } = generateToken(email);
        const userToken = token.split('.');
        await createSession({userId, tokenContent: token, privateKey: tokenKey});
        res.status(200).send({token: `Bearer ${userToken[1]}`});
        return;
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signInController;