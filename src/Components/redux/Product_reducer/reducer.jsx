// step-4
// this is a combine reducer when there is no of reducers it will make easier and it will combine all the reducer to single reducer

import { combineReducers } from "redux";
import { productReducer } from './ProductReducer'

export const reducer = combineReducers({ productData: productReducer })