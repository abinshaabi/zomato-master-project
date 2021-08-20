import joi from "joi";

export const ValidateNewUpdatingUserData = (userData) => {
    const Schema = joi.object({
        fullName: joi.string().min(5),
        email: joi.string().email(),
        address: joi.array().items(joi.object({detail: joi.string(), for: joi.string()})), 
        phoneNumber: joi.number(),
    });

    return Schema.validateAsync(userData);
}