
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import { cartRed } from '../Reducers/cart_reducer';

export default createStore(
    combineReducers({
        rent_movies: cartRed
    }),
    composeWithDevTools(applyMiddleware(thunk))
)