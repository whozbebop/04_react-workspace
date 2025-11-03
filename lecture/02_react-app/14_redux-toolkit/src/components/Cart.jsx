//import { useContext } from 'react';
//import { cartContext } from '../App';
import './Cart.css'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/cartSlice';

function Cart() {

  const {items, totalQuantity, totalPrice} = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니 ({ totalQuantity })</h2>

        {items.length > 0 && (
          <button className="cart-clear-button" onClick={handleClearCart}>
            전체 삭제
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="cart-empty">장바구니가 비어있습니다</p>
      ) : (
        <>
          <div className="cart-items">
            {
              items.map((item) => <CartItem key={item.id} item={item} />)
            }
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>총 금액:</span>
              <span className="cart-total-price">
                { totalPrice.toLocaleString() }원
              </span>
            </div>
            <button className="cart-order-button">주문하기</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart