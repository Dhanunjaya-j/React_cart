// this is a store
// which provides data to entair project
import { createStore} from "redux";
import { reducer } from "../Product_reducer/reducer";

export const Store=createStore(reducer,{})
// it takes two parameters
// 1.reducer what ever we created
// 2.initial state
// step-5