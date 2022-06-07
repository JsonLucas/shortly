import joi from "joi";
import { schemaSignUp } from "./validationSchemas.js";

export const validateSignUp = (body) => {
    const validation = schemaSignUp.validate(body); 
    if(validation.error){
        return {status: false, error: validation.error};
    }
    return {status: true};
} 