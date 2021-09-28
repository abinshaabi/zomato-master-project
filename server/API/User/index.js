//libraries
import express from "express";
import passport from "passport";

//database models
import { UserModel } from "../../database/user";

//validations
import { ValidateUserId } from "../../validation/order";
import { ValidateNewUpdatingUserData } from "../../validation/user";


const Router =express.Router();

/*
Route   /
Des     get user data
Params  none
Body    none 
Access  Public
Method  GET
*/
Router.get("/", passport.authenticate("jwt") , async (req, res) => {
    try {
        /*await ValidateUserId(req.params);

        const { _id } = req.params;

        const getUser = await UserModel.findById(_id)
        */

        const { email, fullName, phoneNumber, address } = req.session.passport.user._doc;

        return res.json({user: { email, fullName, phoneNumber, address }});
        
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
})



/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params._id);
      
      const { fullName } = user;

      return res.json({ user });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });



/*
Route   /update/:_id
Des     update user data
Params  _id
Body    userData 
Access  Public
Method  PUT
*/
Router.put("/:_id", async (req, res) => {
    try {
        await ValidateUserId(req.params);
        await ValidateNewUpdatingUserData(req.body);
        
        const { _id } = req.params;
        const { userData } = req.body;

        const updatedUserData = await UserModel.findByIdAndUpdate(
            {_id},
            {
                $set: userData,
            },
            {new: true}
        )

        return res.json({user: updatedUserData  });
        
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
})


export default Router;