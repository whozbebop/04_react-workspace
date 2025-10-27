import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// 외존성 배열이 빈배열일 경우 - 최초 렌더링시에만 (Mount)
function Example2() {

  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('Example2 컴포넌트가 렌더링됨')
  }, [])
  
  const handleNowClick = (e) => {
    setNow(new Date().toLocaleTimeString())
  }

  return (
    <div>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재 시간: {now}</h2>
    </div>
  )
}

export default Example2