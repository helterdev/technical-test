import { useQuery } from "react-query";



export const getAll = async ()  => {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    const data = await response.json();
    const {products} = await data;    
    return products;
}

export const useProducts = ()  => {
    const query = useQuery('products', getAll, {refetchOnWindowFocus: false});
    return query;
}