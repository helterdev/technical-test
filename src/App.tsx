import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import SideBars from './components/SideBars/SideBars'
import GlobalStyle from './components/UI/GlobalStyle'
import { ProductsProvider } from './context/ProductsContext'

function App() {

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
