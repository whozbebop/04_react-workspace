import { useContext } from 'react'
import { cartContext } from '../App'
import './ProductItem.css'

//CustomElementRegistry

function ProductItem({ product }){

   const {dispatch} = useContext(cartContext)// product {id: xx, name: xx, price: xx, description: xx}

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price
      }
    })
  }
  
  return (
    <div className="product-item">
      <h3 className="product-title">{ product.name }</h3>
      <p className="product-description">{ product.description }</p>
      <p className="product-price">{ product.price.toLocaleString() }</p>
      <button className="product-add-button" onClick={handleAddToCart}>
        장바구니에 추가
      </button>
    </div>
  )
}

export default ProductItem