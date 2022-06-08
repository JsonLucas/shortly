import joi from "joi";

export const schemaSignUp = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export const schemaSignIn = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});

export const schemaUrls = joi.object({
    url: joi.string().uri().required()
});
