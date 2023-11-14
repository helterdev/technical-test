import { createContext, useReducer } from "react";
import { initialStateCart } from "../interfaces/cart";
import { cartReducer, stateCart } from "../hooks/reducers/cartReducer";
import { ProductsApi } from "../interfaces/products";

interface PropsContext {
    state: initialStateCart,
    addProducts: (products: ProductsApi) => void
}

interface PropsProvider {
    children: JSX.Element | JSX.Element[];
}

export const ProductsContext = createContext<PropsContext>({} as PropsContext);

export const ProductsProvider = ({children} : PropsProvider) => {
    const [state, dispatch] = useReducer(cartReducer, stateCart);

    const addProducts = (products : ProductsApi) => {
        dispatch({type: 'add', payload: products})
    }
    return (
        <ProductsContext.Provider value={{state, addProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}