import React, { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);

  return (
    <>
      <div>
        <label>숫자 1: </label>
        <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>숫자 2: </label>
        <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <div>덧셈: {num1} + {num2} = {num1 + num2}</div>
        <div>뺄셈: {num1} - {num2} = {num1 - num2}</div>
        <div>곱셈: {num1} ⅹ {num2} = {(num1 * num2).toFixed(2)}</div>
        <div>나눗셈: {num1} ÷ {num2} = {num2 !== 0 ? (num1 / num2).toFixed(2) : '계산불가'} </div>
      </div>
    </>
  )
}

export default Calculator