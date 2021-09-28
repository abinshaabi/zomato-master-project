//Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user"
import passport from "passport";

//validation 
import { ValidateSignin, ValidateSignup } from "../../validation/auth";

const Router = express.Router();



/*
Route   /signup
Des     Signup with email and password
Params  none
Access  Public
Method  POST
*/
Router.post("/signup", async (req,res) => {
    
    
    try { 
        await ValidateSignup(req.body.credentials);
    
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJWTtoken();
        
        return res.status(200).json({ token, status: "success"})

    } catch (error) {
        return res.status(500).json({error: error.message} );
    }
})

/*
Route   /signin
Des     Signin with email and password
Params  none
Access  Public
Method  POST
*/
Router.post("/signin", async (req,res) => {
    try {
        await ValidateSignin(req.body.credentials);
    
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        
        const token = user.generateJWTtoken();
        
        return res.status(200).json({ token, status: "success"})

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
})


/*
Route   /google
Des     google Signin 
Params  none
Access  Public
Method  GET
*/
Router.get("/google", passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    }
))


/*
Route   /google/callback
Des     google Signin callback
Params  none
Access  Public
Method  GET
*/
Router.get(
    "/google/callback", 
    passport.authenticate("google", { failureRedirect: "/"}),
    (req,res) => {
        return res.redirect(
            `http://localhost:3001/google/${ req.session.passport.user.token}`
        )
    }
)



export default Router;
