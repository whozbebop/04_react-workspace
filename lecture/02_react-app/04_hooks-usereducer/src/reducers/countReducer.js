function countReducer(state, action) { // state=현재상태값, action={type:"요청관련타입", payload: 요청처리시필요한데이터}
  switch(action.type){
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
    default: 
      return state;
  }
  
  // return 새로운상태값
}

export default countReducer