import { useState, useEffect } from 'react';

function Example1() {

  const [now, setNow] = useState(new Date().toLocaleTimeString());

  // 의존성 배열이 없는 경우 => 랜더링시마다 (Mount와 Update)
  useEffect(()=>{  // (setUp 함수, 의존성 배열)
    console.log('Example1 컴포넌트가 렌더링됨')
  })
  // setUp 함수가 동작되는 시점
  // 1. 처음 컴포넌트가 렌더링 될때(Mount, componentDidMount)
  // 2. 다시 렌더링 될때(Update)

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

export default Example1