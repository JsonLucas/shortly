import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';


export const generateToken = (email) => {
    const uuid = uuidv4();
    const token = jwt.sign({session: email}, uuid, {});
    return { token, tokenKey: uuid };
}

export const verifyToken = (content, privateKey) => {
    try{
        const tokenVerification = jwt.verify(content, privateKey);
        return { status: true };
    }catch(e){
        return { status: false, message: e.message }
    }
}
