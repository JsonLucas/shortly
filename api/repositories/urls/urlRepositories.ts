import { IUrl, Url, VisitRanking } from "../../interfaces/urls";
import { prisma } from "../../prisma/database";
import { IUrlRepository } from "./interfaces";

export class urlRepository implements IUrlRepository{
	async create(url: Url): Promise<IUrl>{
		return await prisma.urls.create({data: { ...url }});
	}

	async getById(urlId: number): Promise<IUrl>{
		return await prisma.urls.findUnique({where: { id: urlId }});
	}
	
	async getByShorten(shortUrl: string): Promise<IUrl>{
		return await prisma.urls.findUnique({where: { shortUrl }});
	}
	
	async getByUserId(userId: number): Promise<Array<IUrl>>{
		return await prisma.urls.findMany({where: { userId }});
	}

	async getByVisitCount(): Promise<VisitRanking>{
		const countLinks = await prisma.urls.aggregate({
			_count: {
				userId: true
			}
		});
		const ranking = await prisma.urls.findMany({select: 
			{
				id: true,
				fullUrl: true,
				shortUrl: true,
				visitCount: true,
				userId: true,
				user: {
					select: {
						name: true
					}
				}
			}, 
			orderBy: { visitCount: 'desc' }, 
			take: 5
		});
		return { ranking, countLinks };
	}
	
	async delete(urlId: number): Promise<any>{
		return await prisma.urls.delete({where: { id: urlId }});
	}
	
	async updateVisitCount(updatedCount: number, urlId: number): Promise<any>{
		return await prisma.urls.update({where: { id: urlId }, data: { visitCount: updatedCount }});
	}
}