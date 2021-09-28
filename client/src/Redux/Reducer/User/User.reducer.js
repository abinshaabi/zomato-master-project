import { AUTH_USER, CLEAR_USER, GET_USER, SELF } from "./User.type";

const INITIAL_STATE = {
    user: [],
}

const UserReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                
            }
        case SELF:
        return {
            ...state,
            user: action.payload,
        }
        case AUTH_USER:
            return {
                ...state,
                user: action.payload,
            }
        case CLEAR_USER:
            return {}
    
        default:
            return {
                ...state
            }
    }
}

export default UserReducer