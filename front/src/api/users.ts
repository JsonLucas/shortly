import { api } from ".";
import { SignIn, SignUp } from "../interfaces/users";

export const signUpRequest = async (body: SignUp) => {
	const { data } = await api.post('/users', body);
	return data;
}

export const signInRequest = async (body: SignIn) => {
	const { data } = await api.post('/users/login', body);
	return data;
}