import { IUsers } from "./users";

export interface IUrl{
	id: number,
	fullUrl: string,
	shortUrl: string,
	visitCount: number,
	userId: number,
	createdAt?: Date,
	updatedAt?: Date
}

export type Url = Pick<IUrl, 'fullUrl'>;
export type Ranking = { user: Pick<IUsers, 'id' | 'name'>, numLinks: number, totalVisits: number };