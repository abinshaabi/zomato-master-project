import { combineReducers } from "redux";

import image from "./Image/Image.reducer";
import restaurant from './restaurant/restaurant.reducer'
import review from "./Reviews/review.reducer";
import user from "./User/User.reducer";
import food from "./Food/Food.reducer";
import cart from "./Cart/Cart.reducer";
import order from "./Order/order.reducer";



const rootReducer = combineReducers({ restaurant, image, review, user, food, cart, order })

export default rootReducer
