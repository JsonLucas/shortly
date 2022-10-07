import { IUsers, Ranking, SignUp } from "../../interfaces/users";
import { prisma } from "../../prisma/database";
import { IUserRepository } from "./interfaces";

export class userRepository implements IUserRepository{
	async create (user: SignUp): Promise<IUsers>{
		const { name, email, password } = user;
		return await prisma.users.create({ data: { name, email, password } });
	}

	async getById (id: number): Promise<IUsers>{
		return await prisma.users.findUnique({where: { id }});
	}

	async getByEmail (email: string): Promise<IUsers>{
		return await prisma.users.findUnique({where: { email }});
	}

	async getUsersRanking(): Promise<any>{
		const userUrls = await prisma.users.findMany({
			select: {
				id: true, 
				name: true,
				url: {
					select:{
						id: true, 
						fullUrl: true,
						shortUrl: true,
						visitCount: true
					}
				}
			}
		});
		let urlsCount = [];
		for(let i in userUrls){
			urlsCount.push(await prisma.urls.count({ where: { userId: userUrls[i].id } }));
		}
		return { ranking: [...userUrls], urlsCount };
	}
}