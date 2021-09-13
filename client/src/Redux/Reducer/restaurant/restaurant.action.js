import axios from 'axios'

//Redux types
import { GET_RESTAURANT } from './restaurant.type'

export const getRestaurant = ()  => async (dispatch) => {
    try {
        const restaurantList = axios({
            method: "GET",
            url: "http://localhost:4000/restaurant?city=sdd"
        })

        return dispatch({ type: GET_RESTAURANT, payload: restaurantList})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}