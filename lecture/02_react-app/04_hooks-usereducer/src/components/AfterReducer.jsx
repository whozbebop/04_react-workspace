import React, { useReducer } from 'react'
import countReducer from '../reducers/countReducer'
//rfce

// 뭔가 알겠는데 모르겠음(?)
// 상태 변경 로직을 컴포넌트 외부 함수(Reducer)로 관리
// state를 특정 액션에 따라 관리
// function countReducer(state, action) { // state=현재상태값, action={type:"요청관련타입", payload: 요청처리시필요한데이터}
//   switch(action.type){
//     case "INCREASE":
//       return state + 1;
//     case "DECREASE":
//       return state - 1;
//     case "RESET":
//       return 0;
//     case "ADD":
//       return state + action.payload;
//     case "MINUS":
//       return state - action.payload;
//     default: 
//       return state;
//   }
  
//   // return 새로운상태값
// }

function AfterReducer() {

  const [count, dispatch] = useReducer(countReducer, 0) // [0, f] ==> 0은 초기state값, f는 액션을 발생시키는 함수

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={() => dispatch({type: 'INCREASE'})}>+1 증가</button>
      <button onClick={() => dispatch({type: 'DECREASE'})}>-1 감소</button>
      <button onClick={() => dispatch({type: 'RESET'})}>초기화</button>
      <button onClick={() => dispatch({type: 'ADD', payload: 5})}>+5 증가</button>
      <button onClick={() => dispatch({type: 'MINUS', payload: 5})}>-5 감소</button>
    </>
  )
}

export default AfterReducer