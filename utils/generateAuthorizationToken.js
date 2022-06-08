import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


export const generateToken = (email) => {
    const uuid = uuidv4();
    const emailHash = bcrypt.hashSync(email, 10);
    const token = jwt.sign({session: emailHash}, uuid, {});
    return uuid;
}
