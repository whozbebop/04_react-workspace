import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { createContext, useReducer } from 'react'
import { cartReducer, initialState } from './reducers/cartReducer'

export const CartContext = createContext();

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState) // 리듀서함수, 상태초기값

  return (
    <CartContext.Provider value={{items: state.items, dispatch}}>
      <div className="app-container">
        <ProductList /> 
        <Cart />
      </div>
    </CartContext.Provider>
  )
}

export default App

/*
  1. 화면설계
  2. 컴포넌트 설계
    - 컴포넌트 구조(계층구조)
    - 각 컴포넌트가 가져야될 정보
        App
         ㄴ ProductList
            ㄴ ProductItem (상품명, 상품설명, 상품가격)
            ㄴ ProductItem
             ...
         ㄴ Cart
            ㄴ CartItem (상품명, 상품가격, 수량)
            ㄴ CartItem
             ...

  3. 상태관리 설계
    - 어떤걸 상태관리해야될지
      => 장바구니 아이템 목록

    - 상태관리를 어떤 데이터 구조로 관리할건지
      [
        {id: xx, name: xxx, price: xxxx, quantity: xx},
        {id: xx, name: xxx, price: xxxx, quantity: xx}, 
        ...
      ]
    
    - 각 컴포넌트에서 상태변경을 위한 기능
        App (Context.Provide value = 상태, 상태업데이트함수)
          ㄴ ProductList
            ㄴ ProductItem // 장바구니 아이템 추가 (상태업데이트함수 = useContext) 
                                                      1) 신규 아이템 추가, 
                                                      2) 기존 아이템 수량만 증가
            ㄴ ProductItem
              ...
          ㄴ Cart // 장바구니 아이템 전체 삭제 (상태, 상태업데이트함수 = useContext)
            ㄴ CartItem // 장바구니 아이템 수량증가/감소, 아이템 삭제 (상태업데이트함수 = useContext)
            ㄴ CartItem
              ...
      1. useState + useContext => 각 컴포넌트마다 상태변경로직(복잡함) 구문을 작성해야됨
      2. useReducer + useContext => 각 컴포넌트마다 상태변경 로직 구문 작성x
                                    컴포넌트 UI / 상태변경로직 분리
         redux-toolkit
*/
