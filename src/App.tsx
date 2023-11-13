import './App.css'
import Header from './components/Header/Header'
import GlobalStyle from './components/UI/GlobalStyle'

function App() {
  // const get = async () => {
  //   const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
  //   const data = await response.json();
  //   console.log(data);
    
    
    
  // }

  return (
    <>
      <GlobalStyle/>
      <Header/>
    </>
  )
}

export default App
