import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Info() {
  
  const [searchParams] = useSearchParams() // [URLSearchParams객체, 쿼리스트링수정할수있는함수]
  const name = searchParams.get('name') || 'Guest';
  const age = searchParams.get('age') || 0;

  console.log(name, age)

  // || 이거랑 && 이거 각각 언제 써야될지 헷갈림

  return (
    <>
      <div>Info</div>
      <div>{name}</div>
      <div>{age > 0 && `You are ${age} years old`}</div>
    </>
  )
}

export default Info