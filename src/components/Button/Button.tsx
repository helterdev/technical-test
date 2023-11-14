import styled from "styled-components";
import { bg_primary, text_primary } from "../UI/Variables";
import { ProductsApi } from "../../interfaces/products";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";


const ButtonCart = styled.button`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${bg_primary};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: ${text_primary};
    column-gap: 0.5rem;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Montserrat';
    cursor: pointer;
`;
interface Props {
    products: ProductsApi
}

const Button = ({products} : Props) => {
    
    const {addProducts} = useContext(ProductsContext);
    
    return (
        <ButtonCart type="button" onClick={() => addProducts(products)}>
             <img src="./shopping-bag.svg" alt="shopping" /> Comprar
        </ButtonCart>
    )
}

export default Button;