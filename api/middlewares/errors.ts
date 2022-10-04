import { Request, Response, NextFunction } from 'express';
import { IGenericObject } from '../interfaces/generic-object';

interface Error{
	code: number,
	error: IGenericObject | string
}

export const errorHandler = async (e: Error, req: Request, res: Response, next: NextFunction) => {
	const { code, error } = e;
	if(code){
		if(error){
			return res.status(code).send(error);
		}
		return res.sendStatus(code);
	}
	res.sendStatus(500);
} 