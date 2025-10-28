import React, { useState } from 'react'

function Favorite() {
  const [favorite, setFavorite] = useState({
    color: 'blue',
    fruit: 'apple',
  });

  const handleSelectChange = (e) => {
    setFavorite({
      ...favorite,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <div>
        좋아하는 색상: 
        <select id="color" value={favorite.color} onChange={handleSelectChange}>
          <option value="blue">파란색</option>
          <option value="red">빨간색</option>
          <option value="green">초록색</option>
          <option value="yellow">노란색</option>
        </select>
      </div>
      <div>
        좋아하는 과일: 
        <select id="fruit" value={favorite.fruit} onChange={handleSelectChange}>
          <option value="apple">🍎사과</option>
          <option value="banana">🍌바나나</option>
          <option value="orange">🍊오렌지</option>
          <option value="grape">🍇포도</option>
        </select>
      </div>
      <div>
        선택한 색상: {favorite.color} <br/>
        선택한 과일: {favorite.fruit} 
      </div>
    </>
  )
}

export default Favorite