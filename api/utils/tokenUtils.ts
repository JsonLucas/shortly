import jsonwebtoken from 'jsonwebtoken';
import { jwtSecret } from './environment';


export const generateToken = (userId: number) => {
	if(!jwtSecret) throw { code: 500, error: 'invalid token key' };
    return jsonwebtoken.sign(userId.toString(), jwtSecret, {});
}

export const verifyToken = (content: string) => {
	if(!jwtSecret) throw { code: 500 };
    const tokenVerification = jsonwebtoken.verify(content, jwtSecret);

	if(!tokenVerification) throw { code: 401, error: 'invalid token' };
    return jsonwebtoken.decode(content);
}
