import React from 'react'

function ProductItem({product}) {
  return (
    <div class="product-item">
      <h3 class="product-title">{product.name}</h3>
      <p class="product-description">{product.description}</p>
      <p class="product-price">{product.price.toLocaleString()}원</p>
      <button class="product-add-button">
        장바구니에 추가
      </button>
    </div>
  )
}

export default ProductItem