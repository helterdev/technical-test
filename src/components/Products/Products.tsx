import styled from "styled-components";
import ProductsList from "./ProductsList";

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    row-gap: 1rem;
    @media (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 1rem;
    }
`;

const Products = () => {
    return (
        <section className="section-ul">
            <div className="container-ul">
                <Ul>
                    <ProductsList/>
                    <ProductsList/>
                    <ProductsList/>
                    <ProductsList/>
                    <ProductsList/>
                    <ProductsList/>
                    <ProductsList/>
                    <ProductsList/>

                </Ul>
            </div>
        </section>
    )
}

export default Products;