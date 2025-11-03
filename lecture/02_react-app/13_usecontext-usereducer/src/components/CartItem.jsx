import { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../App'

// <Cartitem item={장바구니아이템객체} />
function CartItem({ item }) { // item === {id: xx, name: xxx, price, quantity: xxx}

  //const {dispatch} = useContext(cartContext)
  const dispatch = useContext(cartContext)

  // dispatch(addToCart({
  //   id: product.id,
  //   name: product.name,
  //   price: product.price
  // }))

  const handleItemRemove = () => {
    dispatch({type: 'REMOVE_FROM_CART', payload: item.id})
  }

  const handleItemQuantityIncrease = () => {
    dispatch({type: 'INCREASE_QUANTITY', payload: item.id})
  }

  const handleItemQuantityDecrease = () => {
    dispatch({type: 'DECREASE_QUANTITY', payload: item.id})
  }

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{ item.name }</h4>
        <p className="cart-item-price">{ item.price.toLocaleString() }원</p>
      </div>
      
      <div className="cart-item-controls">
        <button className="cart-item-quantity-button" onClick={handleItemQuantityDecrease}>
          -
        </button>
        <span className="cart-item-quantity">{ item.quantity }</span>
        <button className="cart-item-quantity-button" onClick={handleItemQuantityIncrease}>
          +
        </button>
      
        <button className="cart-item-remove-button" onClick={handleItemRemove}>
          삭제
        </button>
      </div>
    </div>
  )
}

export default CartItem