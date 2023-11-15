import { createContext, useReducer } from "react";
import { Products, initialStateCart } from "../interfaces/cart";
import { cartReducer, stateCart } from "../hooks/reducers/cartReducer";

interface PropsContext {
    state: initialStateCart,
    addProducts: (products: Products) => void,
    removeProducts: (id: number) => void,
    addButton: (id: number) =>  void,
    removeButton: (id: number) => void
}

interface PropsProvider {
    children: JSX.Element | JSX.Element[];
}

export const ProductsContext = createContext<PropsContext>({} as PropsContext);

export const ProductsProvider = ({children} : PropsProvider) => {
    
    const [state, dispatch] = useReducer(cartReducer, stateCart);

    const addProducts = (products : Products) => {
        dispatch({type: 'add', payload: products})
    }

    const removeProducts = (id: number)  => {
        dispatch({type: 'remove', payload: {id}})
    }

    const addButton = (id: number) => {
        dispatch({type: 'addButton', payload: {id}})
    } 

    const removeButton = (id: number) => {
        dispatch({type: 'removeButton', payload: {id}})
    }
    return (
        <ProductsContext.Provider value={{state, addProducts, removeProducts, addButton, removeButton}}>
            {children}
        </ProductsContext.Provider>
    )
}