import styled from "styled-components";
import { bg_primary, text_primary } from "../UI/Variables";

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

const Button = () => {
    return (
        <ButtonCart type="button">
             <img src="./shopping-bag.svg" alt="shopping" /> Comprar
        </ButtonCart>
    )
}

export default Button;