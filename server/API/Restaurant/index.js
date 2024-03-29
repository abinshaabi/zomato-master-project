//libraries
import express from "express";
import passport from "passport";

//database models
import { RestaurantModel } from "../../database/restaurant";

//validations
import { ValidateRestaurantId } from "../../validation/food";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";


const Router =express.Router();


/*
Route   /
Des     gat all the restaurants details based on city
Params  none
Access  Public
Method  GET
*/
Router.get("/", async (req, res) => {
    try {
        await ValidateRestaurantCity(req.query)
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city })

        return res.json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route   /
Des     get individual restaurant details based on id
Params  id
Access  Public
Method  GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        
        if(!restaurant) 
            return res.status(404).json({ error: "Restaurant Not Found" })
        return res.json({ restaurant });
    } catch (error) {
        
        return res.status(500).json({ error: error.message })
    }
})

/*
Route   /search
Des     get restaurant details based on search string
Params  none
Body    searchString
Access  Public
Method  GET
*/
Router.get("/search", async (req, res) => {
    try {
        await ValidateRestaurantSearchString(req.body);
        const { searchString } = req.body;

        const restaurants = await RestaurantModel.find({ name: {$regex: searchString, $options: "i" }})

        if(!restaurants) return res.status(404).json({ error: `No Restaurant matched with ${searchString}` })

        return res.json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


//pavans
// @Route   POST /restaurants/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newRestaurant = await RestaurantModel.create(req.body.restaurantData);
      return res.json({ restaurants: newRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  




export default Router;