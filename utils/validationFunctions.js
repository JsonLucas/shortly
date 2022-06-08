import joi from "joi";
import { schemaSignIn, schemaSignUp } from "./validationSchemas.js";

export const validateSignUp = (body) => {
    const validation = schemaSignUp.validate(body); 
    if(validation.error){
        return {status: false, error: validation.error};
    }
    return {status: true};
} 

export const validateSignIn = (body) => {
    const validation = schemaSignIn.validate(body);
    if(validation.error){
        return { status: false, error: validation.error };
    }
    return { status: true };
}