import joi from "joi";

export const ValidateUserId = (userId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
        
    });

    return Schema.validateAsync(userId);
}

export const ValidateOrderDetails = (orderDetails) => {
    const Schema = joi.object({
        food: joi.string().required(),//required sirinodu choichitt confirm
        quantity: joi.number().required(),
        paymode: joi.string().required(),
        status: joi.string(),
        paymentDetails: joi.object({
            itemTotal: joi.number().required(),
            promo: joi.number().required(),
            tax: joi.number().required(),
            
        })
        
    });

    return Schema.validateAsync(orderDetails);
}
