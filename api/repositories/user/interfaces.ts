import { IUsers, Ranking, SignUp } from "../../interfaces/users";

export interface IUserRepository{
	create: (user: SignUp) => Promise<IUsers>,
	getById: (id: number) => Promise<IUsers>,
	getByEmail: (email: string) => Promise<IUsers>,
	getUsersRanking: () => Promise<any>
};