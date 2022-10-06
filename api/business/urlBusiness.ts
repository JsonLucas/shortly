import { IUrl, Url, VisitRanking } from "../interfaces/urls";
import { urlRepository } from "../repositories/urls/urlRepositories";

interface IUrlBusiness{
	create: (url: Url) => Promise<IUrl>,
	getById: (urlId: number) => Promise<IUrl>,
	getByUserId: (userId: number) => Promise<Array<IUrl>>,
	getByShorten: (shortUrl: string) => Promise<IUrl>,
	getByVisitCount: () => Promise<VisitRanking>,
	delete: (urlId: number) => Promise<void>,
	updateVisitCount: (updatedCount: number, urlId: number) => Promise<IUrl>
}
export class UrlBusiness implements IUrlBusiness {
	constructor(
		private readonly urlRepository: urlRepository
	) {}

	async create (url: Url): Promise<IUrl>{
		const urlExists = await this.urlRepository.getByShorten(url.shortUrl);
		if(urlExists) throw { code: 409, error: 'this url already exists' };

		return await this.urlRepository.create(url);
	}

	
	async getById (urlId: number): Promise<IUrl> {
		const url = await this.urlRepository.getById(urlId);
		if(!url) throw { code: 404 };
		
		return url;
	}
	
	async getByUserId (userId: number): Promise<Array<IUrl>>{
		return await this.urlRepository.getByUserId(userId);
	}

	async getByShorten (shorten: string): Promise<IUrl> {
		const url = await this.urlRepository.getByShorten(shorten);
		if(!url) throw { code: 404 };

		return url;
	}

	async getByVisitCount(): Promise<VisitRanking>{
		return await this.urlRepository.getByVisitCount();
	}

	async delete (urlId: number): Promise<void> {
		const urlExists = await this.getById(urlId);
		if(!urlExists) throw { code: 404 };

		return await this.urlRepository.delete(urlId);
	}

	async updateVisitCount (urlId: number): Promise<IUrl>{
		const url = await this.getById(urlId);
		if(!url) throw { code: 404 };

		const { visitCount } = url;
		if(!visitCount) throw { code: 500, error: 'invalid visit count' };

		const updatedCount = visitCount + 1;
		return await this.urlRepository.updateVisitCount(updatedCount, urlId);
	}
}