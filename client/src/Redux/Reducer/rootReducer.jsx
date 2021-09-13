import { combineReducers } from "redux";

import image from "./Image/Image.reducer";
import restaurant from './restaurant/restaurant.reducer'


const rootReducer = combineReducers({ restaurant, image })

export default rootReducer
