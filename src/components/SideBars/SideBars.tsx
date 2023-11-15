import { useContext } from "react";
import { bg_primary, text_primary } from "../UI/Variables";
import { ProductsContext } from "../../context/ProductsContext";
import styled from "styled-components";
import { H3,  Span } from "../Products/ProductsList";
import {IoIosCloseCircle} from 'react-icons/io';
import './sidebars.css';

const CardLi = styled.li`
    width: 250px;
    background-color: ${text_primary};
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    padding: 2rem 0;
    position: relative;
    &:active{
      transition: 0.2s ease-out all;
      transform: scale(0.99);
    }
`;

const CardImg = styled.img`
  width: 80px;
`;

const CardButton = styled.button`
  border: none;
  border-radius: 5px;
`;

const DivButton = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;

`;

const CardH3 = styled(H3)`
  padding: 1rem 0;
`;

const CardDivContainer = styled.div`

`;
const SideBars = () => {

    const {state,removeProducts, addButton, removeButton} = useContext(ProductsContext);
      
  
    return (


        <div style={{background: `${bg_primary}`}} className={`offcanvas offcanvas-end text-white`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header ">
            <h5 className="offcanvas-title " id="offcanvasRightLabel">Carrito de compras</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

            <div>
              <ul className="m-0 p-0 d-flex justify-content-center  flex-column align-items-center gap-2" style={{listStyle: 'none'}}>
                
                  {
                    state.cart.map(product => 
                      { const price = parseInt(product.price);
                        
                      return (<CardLi className="text-center" key={product.id}>
                          <IoIosCloseCircle className= "icon" onClick={() => { removeProducts(product.id)
                          }}/>
                          <div>
                            <CardImg src={`${product.photo}`} alt="" />
                          </div>
                          <CardDivContainer>
                            <CardH3>{product.name}</CardH3>
                            <div className="d-flex justify-content-around ">
                              <DivButton>
                                <CardButton onClick={() => addButton(product.id)}>+</CardButton>
                                <span className="text-black px-1 ">{product.quantity}</span>
                                <CardButton onClick={() => removeButton(product.id)}>-</CardButton>
                              </DivButton>
                              <Span>R${price}</Span>
                            </div>
                          </CardDivContainer>
                      </CardLi>)})
                  }
              </ul>
            </div>
          </div>
        </div>
    )
}

export default SideBars;