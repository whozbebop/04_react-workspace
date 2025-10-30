import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products}) {
  return (
    <div>
      <h2>상품 목록</h2>
      <div class="product-list-grid">
        {products.map(((product)=> <ProductItem key={product.id} product={product} />))}
      </div>
    </div>
  )
}

export default ProductList