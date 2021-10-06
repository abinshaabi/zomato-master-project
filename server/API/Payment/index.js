//libraries
import express from "express";
import passport from "passport";
import Razorpay from "razorpay";
import {v4 as uuid} from 'uuid'

//database models
import { OrderModel } from "../../database/order";


const Router =express.Router();


/*
Route   /
Des     get all orders based on id
Params  _id
Access  Public
Method  GET
*/
Router.post("/new", async (req,res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET_ID,
        })
        const options = {
            amount: req.body.amount *100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: `${uuid()}`
        };
        const order = await instance.orders.create(options);

        return res.json({ order })
          
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;