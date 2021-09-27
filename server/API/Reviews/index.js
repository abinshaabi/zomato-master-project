//libraries
import express from "express";
import passport from "passport";

//database models
import { ReviewModel } from "../../database/reviews";

//validation
import { ValidateFoodId, ValidateReviewData } from "../../validation/review";


const Router =express.Router();


/*
Route     /
Des       Get all review
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
    try {
      const reviews = await ReviewModel.find({ restaurant: req.params.resid });
      return res.json({ reviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  


/*
Route   /new
Des     add new food review/rating
Params  nil
Body    review object
Access  Public
Method  POST
*/
Router.post("/new",passport.authenticate("jwt"), async (req, res) => {
    try {
        //await ValidateReviewData(req.body);

        const { _id } = req.session.passport.user._doc;

        const { reviewData } = req.body;

        await ReviewModel.create({...reviewData, user:_id});

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