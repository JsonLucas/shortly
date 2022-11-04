import { Ranking } from "./urls";

export interface IUsers{
	id?: number,
	name: string,
	email: string,
	password: string,
	createdAt?: Date,
	updatedAt?: Date
}

export type SignIn = Pick<IUsers, 'email' | 'password'>;
export type SignUp = { confirmPassword: string } & Pick<IUsers, 'name' | 'email' | 'password'>;