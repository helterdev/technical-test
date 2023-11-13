import styled from "styled-components";
import './products.css';
import { info_color, price_color, text_primary } from "../UI/Variables";
import Button from "../Button/Button";

const List = styled.li`
    width: 15.625em;
    height: 20.5em;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    font-family: 'Montserrat';
`;

const Div = styled.div`
    display: flex;
`;

const DivContainer = styled(Div)`
    flex-direction: column;
    justify-content: end;
    height: 100%;
`;

const Img = styled(Div)`
    justify-content: center;
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


const ProductsList = () => {
    return (
        <List>
            <DivContainer>
                <Img>
                    <img src="./apple-watch.png" alt="img" /> 
                </Img>
                <Info>
                    <div>
                        <H3>
                        Apple Whath Series 4 GPS
                        </H3>
                    </div>
                    <Span>R$399</Span>
                </Info>
                <Info>
                    <P>
                        Redesigned from scratch and completely revised.
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