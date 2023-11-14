import styled from "styled-components";
import './products.css';
import { info_color, price_color, text_primary } from "../UI/Variables";
import Button from "../Button/Button";
import { ProductsApi } from "../../interfaces/products";

const List = styled.li`
    width: 15.625em;
    /* height: 20.5em; */
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    font-family: 'Montserrat';
    list-style: none;
`;

const Div = styled.div`
    display: flex;
`;

const DivContainer = styled(Div)`
    flex-direction: column;
    justify-content: end;
    height: 350px;
`;

const Img = styled(Div)`
    justify-content: center;
    padding-top: 1em;
`;

const Cover = styled.img`
    width: 128px;
`;

const Info = styled(Div)`
    justify-content: space-around;
    padding-top: 1em;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
`;

const H3 = styled.h3`
    font-weight: 400;
    font-size: 16px;
    color: ${info_color};
    margin: 0;
`;

const Span = styled.span`
    color: ${text_primary};
    background-color: ${price_color};
    font-size: 15px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 5px;
`;

const P = styled.p`
    font-size: 10px;
    font-weight: 300;
    color: ${info_color};
    padding-bottom: 1em;
`;

interface Props {
    products: ProductsApi;
}

const ProductsList = ({products} : Props) => {
    const {name, photo, description} = products;
    return (
        <List>
            <DivContainer>
                <Img>
                    <Cover src={`${photo}`} alt="img" /> 
                </Img>
                <Info>
                    <div>
                        <H3>
                            {name}
                        </H3>
                    </div>
                    <Span>R$399</Span>
                </Info>
                <Info>
                    <P>
                        {description}
                    </P>
                </Info>
                <div className="container-button">
                    <Button/>
                </div>
            </DivContainer>
        </List>
    )
}

export default ProductsList;