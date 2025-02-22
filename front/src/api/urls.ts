import { api } from ".";
import { IUrl, Ranking, Url } from "../interfaces/urls";

export const getUserUrls = async () => {
	const { data } = await api.get<Array<IUrl>>('/links');
	return data;
}

export const createShortUrl = async (body: Url, ) => {
	return await api.post('/links/shorten', body);
}

export const getRanking = async () => {
	const { data } = await api.get<Array<Ranking>>('/links/ranking');
	return data;
}

export const deleteUserUrl = async (id: number, ) => {
	return await api.delete(`/links/${id}`);
}

export const visitShorten = async (shorten: string) => {
	return await api.patch(`/links/${shorten}`);
}