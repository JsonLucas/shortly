import { IUrl } from "./urls";

export interface IUsers{	
	id: number,
    name: string,
    email: string,
    password: string,
    createdAt?: Date,
	updatedAt?: Date
}

export type SignUp = Pick<IUsers, 'name' | 'email' | 'password'> & {confirmPassword: string};
export type SignIn = Pick<IUsers, 'email' | 'password'>;