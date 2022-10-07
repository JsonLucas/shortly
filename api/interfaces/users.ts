import { IUrl, UrlRanking } from "./urls";

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
export type Ranking = { ranking: Array<Pick<IUsers, 'id' | 'name'> & { url: Array<UrlRanking> }> } & { urlsCount: Array<number> };