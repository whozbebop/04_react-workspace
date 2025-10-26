import React, { useState } from 'react'

function Counter() {

  const [number, setNumber] = useState('0');

  const handleIncrease = () => {
    setNumber(number + 1);
  }

  const handleDecrease = () => {
    setNumber((prev)=>prev - 1)
  }
  
  const handleReset= (e) => {
    setNumber(0)
  }


  return (
    <>
      <div>카운트: {number}</div>
      <button onClick={handleIncrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={handleDecrease}>+1</button>
    </>
  )
}

export default Counter