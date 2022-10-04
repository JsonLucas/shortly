import { Request, Response, NextFunction } from 'express';
import { UserBusiness } from '../business/userBusiness';
import { userRepository } from '../repositories/user/userRepositories';
import { verifyToken } from '../utils/tokenUtils';
import { validations } from '../utils/validations';
import { schemaSignIn, schemaSignUp } from '../utils/validations/schemas';

export const authMiddlware = async (req:Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;
	if(!authorization) throw { code: 401 };

	const token = authorization.split(' ');
	const userId = verifyToken(token[1]);

	const userBusiness = new UserBusiness(new userRepository());
	await userBusiness.getById(Number(userId));

	res.locals.userId = Number(userId);
	next();
}

export const validateSignUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	const validator = new validations();
	await validator.validate(schemaSignUp, body);

	res.locals.data = body;
	next();
}

export const validateSignInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	const validator = new validations();
	await validator.validate(schemaSignIn, body);

	res.locals.data = body;
	next();
}