import axiosConfig from "../axiosConfig";
import { ISignUserData } from "../../interfaces/interfaces";

export const signInRequest = async (body: ISignUserData) => {
    const request = await axiosConfig.post('/signin', body);
    return request;
}

export const signUpRequest = async (body: ISignUserData) => {
    const request = await axiosConfig.post('/signup', body);
    return request;
}

export const getRankingRequest = async () => {
    const request = await axiosConfig.get('/ranking');
    return request;
};
