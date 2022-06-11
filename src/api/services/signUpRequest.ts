import axiosConfig from "../axiosConfig";
import { signUserData } from "./interfaces";

const signUpRequest = async (body: signUserData) => {
    const request = await axiosConfig.post('/signup', body);
    return request;
}

export default signUpRequest;