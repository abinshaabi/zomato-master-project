import axios from 'axios'

//redux actions 
import { getMyUser } from "../User/User.action"

//Redux types
import { GOOGLE_AUTH, SIGN_IN, SIGN_UP } from './Auth.type'

export const signIn = (userData)  => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:3000/auth/signin`,
            data: { credentials: userData}
        })

        getMyUser();
        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }))

        return dispatch({ type: SIGN_IN,  payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}


export const signUp = (userData)  => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:3000/auth/signup`,
            data: { credentials: userData}
        })

        getMyUser();

        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }))

        return dispatch({ type: SIGN_UP,  payload: User.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const googleAuth = (token) => async (dispatch) => {
    try {
      localStorage.setItem("zomatoUser", JSON.stringify({ token }));
  
      getMyUser();
  
      return dispatch({ type: GOOGLE_AUTH, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
  
