import React from 'react'
import CartItem from './CartItem'

function Cart() {
  return (
    <div class="cart-container">
      <div class="cart-header">
        <h2>장바구니 (0)</h2>
        {/* <!-- 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 --> */}
        <button class="cart-clear-button">
          전체 삭제
        </button>
      </div>

      {/* <!-- case1. 장바구니가 비어있을 경우 -----------> */}
      <p class="cart-empty">장바구니가 비어있습니다</p>
      {/* <!-- -------------------------------------------> */}
      
      {/* <!-- case2. 장바구니에 아이템이 있을 경우 ------> */}
      <div class="cart-items">
        <CartItem />
      </div>

      <div class="cart-summary">
        <div class="cart-total">
          <span>총 금액:</span>
          <span class="cart-total-price">
            200,0000원
          </span>
        </div>
        <button class="cart-order-button">주문하기</button>
      </div>
      {/* <!-- --------------------------------------- --> */}
    </div>
  )
}

export default Cart