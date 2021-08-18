
//importing env variables
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config"

//microservice routes
import Auth from "./API/Auth"; 
import Restaurant from "./API/Restaurant";
import Food from "./API/Food"
import Menu from "./API/Menu"
import Order from "./API/Orders"
import Reviews from "./API/Reviews"


//database connection
import ConnectDB from "./database/connection"


const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


//passport configuration
googleAuthConfig(passport);



//Application routes
zomato.use("/auth",Auth)
zomato.use("/restaurant", Restaurant)
zomato.use("/food", Food)
zomato.use("/menu", Menu)
zomato.use("/order", Order)
zomato.use("/reviews", Reviews)


zomato.get("/", (req,res) => res.json({ message : "setup success"}))

zomato.listen(4000, () => 
        ConnectDB()
            .then(() => console.log("Server is running"))
            .catch(() => console.log("Server is running, but databse connection failed")) 
    );