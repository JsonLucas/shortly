import { api } from ".";
import { SignIn, SignUp } from "../interfaces/users";

export const signUpRequest = async (body: SignUp) => {
	const { data } = await api.post('/signup', body);
	return data;
}

export const signInRequest = async (body: SignIn) => {
	const { data } = await api.post('/signin', body);
	return data;
}