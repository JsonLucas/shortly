import { generateToken } from "../utils/tokenUtils.js";
import createSession from '../database/queries/create/sessions.js';

const signInController = async (req, res) => {
    try{
        const { userId, email, username } = res.locals;
        const { token, tokenKey } = generateToken(email);
        const userToken = token.split('.');
        await createSession({userId, tokenContent: token, privateKey: tokenKey});
        res.status(200).send({token: `Bearer ${userToken[1]}`, username});
        return;
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signInController;