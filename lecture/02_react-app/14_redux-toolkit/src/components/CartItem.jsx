import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cartSlice';
import './CartItem.css'
import { useDispatch } from 'react-redux'

function CartItem({ item }) {
  
  const dispatch = useDispatch();

  const handleItemRemove = () => {
    dispatch(removeFromCart(item.id))
  }

  const handleItemQuantityIncrease = () => {
    dispatch(increaseQuantity(item.id))
  }

  const handleItemQuantityDecrease = () => {
    dispatch(decreaseQuantity(item.id));
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