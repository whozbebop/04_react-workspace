import React from 'react'

function CartItem() {
  return (
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>상품명</h4>
        <p class="cart-item-price">10,000원</p>
      </div>
      
      <div class="cart-item-controls">
        <button class="cart-item-quantity-button">
          -
        </button>
        <span class="cart-item-quantity">1</span>
        <button class="cart-item-quantity-button">
          +
        </button>
      
        <button class="cart-item-remove-button">
          삭제
        </button>
      </div>
    </div>
  )
}

export default CartItem