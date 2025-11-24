import React from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function ObjectTypeExample() {

  console.log('해당 컴포넌트 렌더링됨..');

  const [inputValue, setInputValue] = useState(''); // tv 객체와 아무 관계 없는 state
  const [isSale, setIsSale] = useState(false); // tv 객체와 연관이 있는 state

  /* 컴포넌트 렌더링시마다 매번 새로운 객체 생성 => 메모리 낭비 
  const tv = {
    brand: 'samsung',
    size: 65,
    price: isSale ? '할인가 100만원' : '정가 200만원'
  };
  */

  // isSale 값이 변경될때만 새로운 객체 생성 
  const tv = useMemo(() => {
    return {
      brand: 'samsung',
      size: 65,
      price: isSale ? '할인가 100만원' : '정가 200만원'
    }
  }, [isSale]) // isSale 값이 변할때만 tv 객체를 재할당하게끔


  useEffect(() => {
    console.log('현재 tv객체 정보:', tv);
  }, [tv]);


  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <br />
      <button onClick={() => setIsSale(!isSale)}>할인 여부 변경</button>
    </>
  )
}

export default ObjectTypeExample