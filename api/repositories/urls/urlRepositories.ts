import { IUrl, Url } from "../../interfaces/urls";
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
	
	async delete(urlId: number): Promise<any>{
		return await prisma.urls.delete({where: { id: urlId }});
	}
	
	async updateVisitCount(updatedCount: number, urlId: number): Promise<any>{
		return await prisma.urls.update({where: { id: urlId }, data: { visitCount: updatedCount }});
	}
}