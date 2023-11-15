import { Products, initialStateCart } from "../../interfaces/cart";

// State Inicial
export const stateCart : initialStateCart = {
    cart: [],
    count: 0
}


type CartActions = {type: 'add', payload: Products} | {type: 'remove', payload: {id: number}} | 
{type: 'addButton', payload: {id:number}} | {type: 'removeButton', payload:{id:number}};



export const cartReducer = (state : initialStateCart, action : CartActions) => {
    
    switch (action.type) {
        case 'add': 
             {  
                const newProduct = action.payload;
                const isProduct = state.cart.find(product => product.id === newProduct.id);
                
                return isProduct ? {
                    ...state,
                    cart: state.cart.map( product => {
                        return product.id === newProduct.id ? {...product, quantity: product.quantity+1} : product;
                    }),
                }
                 :                 
                 {
                    count: state.count + 1,
                    cart: [...state.cart, action.payload]
                }
            }
        case 'remove':{
            return {
                count: state.count - 1,
                cart: state.cart.filter((product) => product.id !== action.payload.id)
            }}

        case 'addButton': {
            
            return {
                ...state,
                cart: state.cart.map((product) => {
                    return product.id === action.payload.id ? {...product, quantity: product.quantity + 1}: product;
                })
            }
        }

        case 'removeButton': {
            return {
                ...state,
                cart: state.cart.map((product) => {
                    const findProduct = product.id === action.payload.id;
                    if(findProduct){
                        if(product.quantity > 1){
                            return {
                                ...product,
                                quantity: product.quantity - 1
                            }
                        }
                    }
                    return {
                        ...product
                    }
                })
            }
        }
        default:
            return state;
    }
}


