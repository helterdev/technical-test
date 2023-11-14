import { initialStateCart } from "../../interfaces/cart";
import { ProductsApi } from "../../interfaces/products";

// State Inicial
export const stateCart : initialStateCart = {
    cart: []
}


type CartActions = {type: 'add', payload: ProductsApi}



export const cartReducer = (state : initialStateCart, action : CartActions) => {
    switch (action.type) {
        case 'add': 
             {  
                // console.log(action.payload);
                
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
    
        default:
            return state;
    }
}


