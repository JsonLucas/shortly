import { IUrl, Ranking, Url } from "../../interfaces/urls";

export interface IUrlRepository {
	create: (url: Url) => Promise<IUrl>,
	getById: (urlId: number) => Promise<IUrl>,
	getByShorten: (shortUrl: string) => Promise<IUrl>,
	getByUserId: (userId: number) => Promise<Array<IUrl>>,
	getRanking: () => Promise<any>//<Array<Ranking>>,
	delete: (urlId: number) => Promise<void>,
	updateVisitCount: (updatedCount: number, urlId: number) => Promise<IUrl>
}