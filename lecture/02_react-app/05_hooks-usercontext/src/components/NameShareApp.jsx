import DisplayName from './DisplayName'
import ChangeName from './ChangeName'
import React, { useState } from 'react'



function NameShareApp() {
  
  const names = ['이영희', '김철수', '박민수', '홍길동'];
  const [currentName, setCurrentName] = useState('홍길동');

  return (
    <>
      <h1>이름 공유 앱</h1>

      {/* 현재 선택된 이름이 display되는 컴포넌트 */}
      <DisplayName currentName={currentName} />
      
      {/* 현재 선택되는 이름을 변경시켜주는 버튼 목록 */}
      <ChangeName setCurrentName={setCurrentName} names={names} />

    </>
  )
}

export default NameShareApp