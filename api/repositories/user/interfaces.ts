import { IUsers, SignUp } from "../../interfaces/users";

export interface IUserRepository{
	create: (user: SignUp) => Promise<IUsers>,
	getById: (id: number) => Promise<IUsers>,
	getByEmail: (email: string) => Promise<IUsers>
};