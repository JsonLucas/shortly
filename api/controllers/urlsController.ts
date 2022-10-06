import { Request, Response } from 'express';
import { UrlBusiness } from '../business/urlBusiness';
import { urlRepository } from '../repositories/urls/urlRepositories';
import { faker } from '@faker-js/faker';

const urlBusiness = new UrlBusiness(new urlRepository());

export const createUrlController = async (req: Request, res: Response) => {
	const { userId } = res.locals;
	const { fullUrl } = req.body;
	const shortUrl = faker.datatype.uuid().split('-');
	await urlBusiness.create({ fullUrl, shortUrl: shortUrl[0], userId });
	res.sendStatus(201);
}

export const getUrlsController = async (req: Request, res: Response) => {
	const { userId } = res.locals;
	const urls = await urlBusiness.getByUserId(userId);
	res.status(200).send(urls);
}

export const getRankingController = async (req: Request, res: Response) => {
	const ranking = await urlBusiness.getByVisitCount();
	res.status(200).send(ranking);
}

export const deleteUrlController = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = res.locals;
	await urlBusiness.delete(Number(id));
	res.sendStatus(204);
}