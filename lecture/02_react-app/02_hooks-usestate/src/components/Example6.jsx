import React, { useState } from 'react'

function Example6() {

  // 상태관리 
  // 1. 사용자 입력값 
  // 2. 동물목록데이터 
  const [inputValue, setInputValue] = useState('');
  const [animals, setAnimals] = useState([]);

  // 추가버튼 클릭시 동작될 함수
  const handleAddAnimal = () => {
    // 사용자 입력값 => animals 배열 추가(animals 상태변수업데이트)

    //animals.push(inputValue) // 상태변수직접수정 => React 변경감지x
    setAnimals([
      ...animals, // 기존 animals 배열 요소 전부
      inputValue  // 새로 입력된 동물값
    ])

    // 사용자 입력값 초기화 
    setInputValue('');
  }


  return (
    <>
      <h2>배열활용</h2>
      <input 
        type="text" 
        placeholder="추가할 동물 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddAnimal}>추가</button>

      <h5>현재 추가된 동물 목록</h5>
      <ul>
        {/* 추가되는 동물 목록 => li */}
        {
          animals.map((animal, index) => <li key={index}>{animal}</li>)
        } 
      </ul>
    </>
  )
}

export default Example6