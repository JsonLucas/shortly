import { IUsers } from "./users";

export interface IUrl{
	id?: number,
    fullUrl: string,
    shortUrl: string,
    visitCount?: number,
	userId: number,
    createdAt?: Date,
	updatedAt?: Date
};

export type Url = Pick<IUrl, 'fullUrl' | 'shortUrl' | 'userId'>;
export type Ranking = Pick<IUrl, 'visitCount'> & { user: Pick<IUsers, 'name' | 'id'> };