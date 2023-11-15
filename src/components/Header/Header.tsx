import {BsCartDashFill} from 'react-icons/bs';
import styled from 'styled-components';
import { bg_primary, text_primary } from '../UI/Variables';
import './header.css';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';


const Header_Container = styled.header`
    background-color: ${bg_primary};
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 3em;
    height: 6em;
`;

const Title = styled.p`
    color: ${text_primary};
    font-size: 2.5em;
    font-weight: 600;
    font-family: 'Montserrat';
`;

const Title_2 = styled(Title)`
    font-weight: 200;
    font-size: 1.3em;
    position: absolute;
    right: -95px;
    top: 50%;
`;

const Button = styled.button`
    border-radius: 8px;
    background-color: ${text_primary};
    border: none;
    padding: 0.7em 1.3em;
    display: flex;
    align-items: center;
    column-gap: 4px;
    cursor: pointer;
`;

{/* <button className="btn btn-primary" type="button" >Toggle right offcanvas</button> */}

const Header = () => {
    const {state} = useContext(ProductsContext);
    return (
        <Header_Container>
            <Box>
                <div className='box-title'>
                    <Title>MKS</Title>
                    <Title_2>Sistemas</Title_2>
                </div>
                <div>
                    <Button type='button'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <BsCartDashFill/>
                        {state.count}
                    </Button>
                </div>
            </Box>
        </Header_Container>
    )
}

export default Header;