import React, { useState } from 'react'

function Example3() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    // 흐음 뭔가 쉬운것 같기도 아닌것 같기도(?)
    setSelectedValue(e.target.value)
  } 

  return (
    <>
      <h2>셀렉트박스와 state</h2>
      <select 
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option hidden value="">통신사 선택</option> {/* hidden 옵션 첨 알았네 */}
        <option>SKT</option>
        <option>KT</option>
        <option>LG U+</option>
      </select>
      <h5>선택값: {selectedValue}</h5>
    </>
  )
}

export default Example3