import axiosConfig from "../axiosConfig";
import { signUserData } from "./interfaces";

const signInRequest = async (body: signUserData) => {
    const request = await axiosConfig.post('/signin', body);
    return request;
}

export default signInRequest;