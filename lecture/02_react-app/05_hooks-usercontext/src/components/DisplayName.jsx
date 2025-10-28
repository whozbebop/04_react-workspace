import React from 'react'

// 상태변수 (현재선택된이름)
function DisplayName({currentName}) {
  return (
    <>
      <h2>현재 선택된 이름: {currentName}</h2>
    </>
  )
}

export default DisplayName