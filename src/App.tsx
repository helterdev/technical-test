import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import SideBars from './components/SideBars/SideBars'
import GlobalStyle from './components/UI/GlobalStyle'
import { ProductsProvider } from './context/ProductsContext'

function App() {
  // const get = async () => {
  //   const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
  //   const data = await response.json();
  //   console.log(data);
    
    
    
  // }

  return (
    <>
      <GlobalStyle/>
      <ProductsProvider>
      <Header/>
      <Products/>
      <SideBars/>
      </ProductsProvider>
      
    </>
  )
}

export default App
