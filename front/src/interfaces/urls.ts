export interface IUrl{
	id: number,
	fullUrl: string,
	shortUrl: string,
	userId: number,
	createdAt?: Date,
	updatedAt?: Date
}

export type Url = Pick<IUrl, 'fullUrl'>;
export type Ranking = Pick<IUrl, 'id' | 'fullUrl' | 'shortUrl'> & { visitCount: number, name: string, numLinks: number };