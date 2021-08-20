//libraries
import express from "express";
import passport from "passport";

//database models
import { ReviewModel } from "../../database/reviews";

//validation
import { ValidateFoodId, ValidateReviewData } from "../../validation/review";


const Router =express.Router();


/*
Route   /food/new
Des     add new food review/rating
Params  nil
Body    review object
Access  Public
Method  POST
*/
Router.post("/food/new", async (req, res) => {
    try {
        await ValidateReviewData(req.body);

        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({review: "Successfully created review"});
        
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
})


/*
Route   /delete
Des     delete a food review/rating
Params  _id
Body    none
Access  Public
Method  DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        await ValidateFoodId(req.params);
        
        const { _id } = req.params;

        await ReviewModel.findOneAndDelete(_id);
        
        return res.json({review: "Successfully deleted the review"});
        
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
})

export default Router;