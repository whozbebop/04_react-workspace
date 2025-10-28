import React, { useState } from 'react'

function Item() {

  const items = ['사과', '바나나', '오렌지', '포도', '딸기',];
  const [item, setItem] = useState('');

  return (
    <>
      <div>
        {items.map((item) => (
          <input type="button" value={item} onClick={(e) => setItem(e.target.value)} />
        ))}
      </div>
      <div>
        <label>선택된 과일: </label>
        <span>{item || '없음'}</span>
      </div>
      {item && <div>🎉 {item}를 선택하셨습니다!</div>}
    </>
  )
}

export default Item