import { Request, Response } from 'express';
import { UrlBusiness } from '../business/urlBusiness';
import { UserBusiness } from '../business/userBusiness';
import { urlRepository } from '../repositories/urls/urlRepositories';
import { userRepository } from '../repositories/user/userRepositories';
import { comparePassword, encryptPassword } from '../utils/passwordCrypt';
import { generateToken } from '../utils/tokenUtils';

export const signUpController = async (req: Request, res: Response) => {
	const { data } = res.locals;
	const userBusiness = new UserBusiness(new userRepository());
	const hash = encryptPassword(data.password);
	await userBusiness.create({...data, password: hash});
	res.sendStatus(201);
}

export const signInController = async (req: Request, res: Response) => {
	const { data } = res.locals;
	const userBusiness = new UserBusiness(new userRepository());
	const user = await userBusiness.getByEmail(data.email);
	if(!comparePassword(data.password, user.password)) throw { code: 401, error: 'incorrect password' };

	const token = `Bearer ${generateToken(user.id)}`;
	res.status(200).send({ token });
}

export const getUrlsByUserIdController = async (req: Request, res: Response) => {
	const { userId } = res.locals;
	const urlBusiness = new UrlBusiness(new urlRepository());
	const urls = await urlBusiness.getByUserId(userId);
	res.status(200).send(urls);
}

export const getRankingController = async (req: Request, res: Response) => {}