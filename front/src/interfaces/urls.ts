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
export type Ranking = Omit<IUrl, 'createdAt' | 'updatedAt' | 'userId'>;