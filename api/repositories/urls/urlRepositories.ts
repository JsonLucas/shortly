import { IUrl, Ranking, Url } from "../../interfaces/urls";
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
	
	async getRanking (): Promise<Array<Ranking>>{
		const links = await prisma.urls.findMany({
			select: {
				user: {
					select: { id: true, name: true }
				}
			},
			distinct: ['userId'],
			orderBy: { visitCount: 'asc' },
			take: 10
		});
		let auxLinks: Array<Ranking> = [];
		for(let i in links){
			const aux = links[i];
			const dataSum = await prisma.urls.aggregate({
				_count: { _all: true },
				_sum: { visitCount: true },
				where: { user: { id: aux.user.id } }	
			});
			auxLinks.push({...aux, numLinks: dataSum._count._all, totalVisits: dataSum._sum.visitCount});
		}
		return auxLinks;
	}

	async delete(urlId: number): Promise<any>{
		return await prisma.urls.delete({where: { id: urlId }});
	}
	
	async updateVisitCount(updatedCount: number, urlId: number): Promise<any>{
		return await prisma.urls.update({where: { id: urlId }, data: { visitCount: updatedCount }});
	}
}