import { IUsers, SignUp } from "../interfaces/users";
import { userRepository } from "../repositories/user/userRepositories";

interface IUserBusiness{
	create: (user: SignUp) => Promise<IUsers>,
	getById: (id: number) => Promise<IUsers>,
	getByEmail: (email: string) => Promise<IUsers>
}

export class UserBusiness implements IUserBusiness {
	constructor(
		private readonly userRepository: userRepository
	) {}

	async create (user: SignUp): Promise<IUsers>{
		const { email } = user;
		const userExists = await this.userRepository.getByEmail(email);
		if(userExists) throw { code: 409, error: 'this user already exists' };

		return await this.userRepository.create(user);
	}

	async getById (id: number): Promise<IUsers>{
		const user = await this.userRepository.getById(id);
		if(!user) throw { code: 404 };

		return user;
	}

	async getByEmail (email: string): Promise<IUsers>{
		const user = await this.userRepository.getByEmail(email);
		if(!user) throw { code: 404 };

		return user;
	}
}