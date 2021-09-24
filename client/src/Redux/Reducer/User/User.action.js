import axios from 'axios'

//Redux types
import { GET_USER } from './User.type'

export const getUser = (_id)  => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:3000/user/${_id}`
        })

        return dispatch({ payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}


export const getMyUser = ()  => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:3000/user`
        })

        return dispatch({ type: GET_USER, payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}




/*export const authUser = (_id)  => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:3000/user/${_id}`
        })

        return dispatch({ type: GET_USER, payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}*/