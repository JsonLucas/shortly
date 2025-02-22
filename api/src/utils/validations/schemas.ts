import joi from "joi";

const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

export const schemaSignUp = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().regex(passwordRegex).required(),
    confirmPassword: joi.ref('password')
});

export const schemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const schemaUrls = joi.object({
    fullUrl: joi.string().uri().required()
});
