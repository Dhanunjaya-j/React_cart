//it is an  action creator 
// it is a plain js function which will be having type and payload
// when we dispatching sertain thing at the time it will be used

import { ACTION_TYPE } from "../types/ActionTypes";


export const addToCart=(product)=>{
    return{
        type:ACTION_TYPE.ADD_TO_CART,
        payload:product
    }
// will be adding product by product details
}

export const removeFromCart=(id)=>{
    return{
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload:id,
    }
// removing the product by id
}
// step-2