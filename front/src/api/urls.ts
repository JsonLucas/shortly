import { api } from ".";
import { IHeaders } from "../interfaces/auth";
import { IUrl, Ranking, Url } from "../interfaces/urls";

export const getUserUrls = async (headers: IHeaders) => {
	const { data } = await api.get<Array<IUrl>>('/urls', headers);
	return data;
}

export const createShortUrl = async (body: Url, headers: IHeaders) => {
	return await api.post('/urls/shorten', body, headers);
}

export const getRanking = async () => {
	const { data } = await api.get<Array<Ranking>>('/urls/ranking');
	return data;
}

export const deleteUserUrl = async (id: number, headers: IHeaders) => {
	return await api.delete(`/urls/${id}`, headers);
}

export const visitShorten = async (shorten: string) => {
	return await api.get(`/urls/open/${shorten}`);
}