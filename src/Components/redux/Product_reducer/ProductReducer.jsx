// step-3

import { ACTION_TYPE } from "../types/ActionTypes";


// first we initilize the state here
const initialState = {
    productData: [],
    cartData: []
}
// this is the reducer it will be knowing how you will be doing action
// it will take two parameters
 export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            return {
               ...state,
               cartData:[...state.cartData,action.payload]
            };

        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterproduct=state.cartData.filter((cartItem)=>cartItem.id !==action.payload)
            return {
                ...state,
                cartData:filterproduct,
            };
            default:
                return state
                // if we didnot pass default here it rises error
    }
}