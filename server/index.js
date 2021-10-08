
//importing env variables
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config"
import routeConfig from "./config/route.config";


//microservice routes
import Auth from "./API/Auth"; 
import Restaurant from "./API/Restaurant";
import Food from "./API/Food"
import Menu from "./API/Menu"
import Order from "./API/Orders"
import Reviews from "./API/Reviews"
import User from "./API/User"
import Image from "./API/Image"
import Payment from "./API/Payment"
import MailService from "./API/Mail"

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
routeConfig(passport);



//Application routes
zomato.use("/auth",Auth)
zomato.use("/restaurant", Restaurant)
zomato.use("/food", Food)
zomato.use("/menu", Menu)
zomato.use("/order", Order)
zomato.use("/reviews", Reviews)
zomato.use("/user", User)
zomato.use("/image", Image)
zomato.use("/payment", Payment)
zomato.use("/mail", MailService)


zomato.get("/", (req,res) => res.json({ message : "setup11 success"}))

zomato.listen(4000, () => 
        ConnectDB()
            .then(() => console.log("Server is running"))
            .catch((error) => console.log("Server is running, but database connection failed")) 
    );