import axios from 'axios'

//Redux types
import { GET_FOOD_LIST } from './Food.type'


export const getFoodList = (resId)  => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `http://localhost:3000/food/r/${resId}`
        })

        return dispatch({ type: GET_FOOD_LIST, payload: Food.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}