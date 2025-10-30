import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { getProducts } from './api/ProductApi'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(getProducts)
  },[])

  return (
    <>
      <div class="app-container">
        <ProductList products={products} />
        <Cart />
      </div>
    </>
  )
}

export default App
