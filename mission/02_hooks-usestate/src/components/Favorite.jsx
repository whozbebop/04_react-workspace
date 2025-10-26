import React, { useState } from 'react'

function Favorite() {

  const [selectedValue, setSelectedValue] = useState({
    color: 'red',
    fruit: '🍅 tomato'
  });

  const handleSelectChange = (e) => {
    setSelectedValue({
      ...selectedValue,
      [e.target.name] : e.target.value
    })
  } 

  return (
    <>
      좋아하는 색상 : <select
        name="color"
        value={selectedValue.color}
        onChange={handleSelectChange}
      >
        <option value="blue">파랑색</option>
        <option value="red">빨강색</option>
        <option value="green">초록색</option>
        <option value="yellow">노랑색</option>
      </select>
      <br />
      좋아하는 과일 : <select
        name="fruit"
        value={selectedValue.fruit}
        onChange={handleSelectChange}
      >
        <option value="🍌 banana">바나나</option>
        <option value="🍓 strawberry">딸기</option>
        <option value="🍅 tomato">토마토</option>
        <option value="🥝 kiwi">키위</option>
      </select>
      <br />
      선택한 색상 : {selectedValue.color}
      <br />
      선택한 과일: {selectedValue.fruit}
    </>
  )
}

export default Favorite