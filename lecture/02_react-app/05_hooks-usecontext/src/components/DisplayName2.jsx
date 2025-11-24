import React from 'react'
import { useContext } from 'react'
import { NameContext } from './NameShareApp2'

// 상태변수(현재선택된이름)
function DisplayName2() {

  // NameContext 객체를 구독해서 해당 컨텍스트에 저장된 내용을 꺼내서 사용
  const {currentName} = useContext(NameContext) // {names: [], currentName: xxx, setCurrentName: f}

  return (
    <h2>현재 선택된 이름: {currentName}</h2>
  )
}

export default DisplayName2