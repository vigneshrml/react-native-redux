import {ADD, SUB , ADDCART , DELETECART} from "./actionTypes";

const initialState = {
    counter : 0,
    cart : []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD:
            return {...state,counter:state.counter + 2};
        case SUB:
            return {...state,counter:state.counter - 1};
        case ADDCART:
            // console.log(action.data)
             return {...state, cart : [...state.cart,action.data]};
        case DELETECART:
             const tempArr = state.cart;
             state.cart = []
             tempArr.splice(action.i,1);
             return {
                 ...state,
                 cart : [...tempArr]
             }
        default:
            return state;        
    }
} 