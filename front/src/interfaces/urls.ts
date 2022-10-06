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
export type Ranking = Pick<IUrl, 'fullUrl' | 'shortUrl' | 'visitCount' | 'userId' | 'id'> & { user: { name: string } };
export type VisitRanking = { ranking: Array<Ranking>, countLinks: { _count: { userId: number } } }