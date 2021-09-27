//libraries
import express from "express";
import passport from "passport";

//database models
import { FoodModel } from "../../database/food";

//validation
import { ValidateCategory, ValidateRestaurantId } from "../../validation/food";


const Router =express.Router();


/*
Route   /r
Des     get all the foods based on restauarnt
Params  id
Access  Public
Method  GET
*/
Router.get("/r/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params)
        const { _id } = req.params;
        const foods = await FoodModel.find({restaurant: _id});

        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message})
        
    }
})



/*
Route   /c
Des     get all the foods based on category
Params  category
Access  Public
Method  GET
*/
Router.get("/c/:category", async (req, res) => {
    try {
        await ValidateCategory(req.params)
        const { category } = req.params;
        const foods = await FoodModel.find({ category: {$regex: category , $options: "i"} });

        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message})
        
    }
})




/*
Route   /:_id
Des     get all the foods based on id
Params  id
Access  Public
Method  GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.findById(_id);

        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message})
        
    }
})




export default Router;