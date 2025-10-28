import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div>카운트: <b>{count}</b></div>
      <div>
        <button onClick={() => setCount(count -1)}>-1</button>
        <button onClick={() => setCount(0)}>초기화</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </>
  )
}

export default Counter