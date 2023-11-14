import styled from "styled-components";
import ProductsList from "./ProductsList";
import { useProducts } from "../../hooks/useProducts";
import { ProductsApi } from "../../interfaces/products";
import Loading from "../Loading/Loading";



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
    const query = useProducts();
    const {data , isLoading} = query;    
    
    return (
        <section className="section-ul">
            <div className="container-ul">
            <Ul>
                {isLoading ? <Loading/> :  data.map((product : ProductsApi) => { return <ProductsList products={product} key={product.id} />}) }
                {/* isLoading ? <Loading/> */}
            </Ul>
            </div>
        </section>
    )
}

export default Products;