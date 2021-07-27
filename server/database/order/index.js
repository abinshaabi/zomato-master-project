import  Mongoose from "mongoose";

const OrderSchema = new Mongoose.Schema({
    user: {
        type: Mongoose.Types.ObjectId,
        ref: "Users",
    },
    orderDetails: [
        {
            food: {  type: Mongoose.Types.ObjectId, ref: "Users",},
            quantity: { type: Number, required: true},
            paymode: { type: String, required: true},
            status: { type: String, default: "Placed" },
            paymentDetails: {
                itemTotal: {type: Number, required: true},
                promo: {type: Number, required: true},
                tax: {type: Number, required: true}
            }
        },
    ],
    orderRatings: {type: Number, requred: true},


},
{
    timestamps: true,
}

);


export const OrderModel = Mongoose.model("Orders", OrderSchema)