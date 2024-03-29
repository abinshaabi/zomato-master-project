import axios from 'axios'

//Redux types
import { CLEAR_USER, GET_USER, SELF } from './User.type'

export const getUser = (_id)  => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`
        })

        return dispatch({ type: GET_USER, payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}


export const getMyUser = ()  => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user`
        })

        return dispatch({ type: SELF, payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const clearUser = ()  => async (dispatch) => {
    try {
        
        return dispatch({ type: CLEAR_USER, payload: {}})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}




/*export const authUser = (_id)  => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`
        })

        return dispatch({ type: GET_USER, payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}*/