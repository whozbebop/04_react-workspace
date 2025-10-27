import  React, { useEffect, useState } from 'react'

function Example4() {
  // 상태관리1) 타이머 시간(초)
  const [seconds, setSeconds] = useState(0);
  // 상태관리2) 타이머 상태
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    // setUp 함수
    console.log('setup 함수 실행');

    // 타이머 상태가 true일 때만 1초간격마다 현재 초를 1씩 증가하는 타이머 설정
     if(isRunning){
      intervalId = setInterval(() => {
        //console.log('생성된 interval의 콜백함수')
        //setSeconds(seconds + 1)
        setSeconds((prev) => prev + 1)
      }, 1000)
    }

    // cleanup 함수 : 컴포넌트가 Unmount 또는 useEffect의 setUp 함수가 다시 실행되기 "전"
    return () => {
      console.log('cleanup 함수 실행')
      clearInterval(intervalId);
    }
  }, [isRunning])

  // 타이머 정리하지 않았을때의 문제점
  // 1. 정지 상태(false)로 변경되도 현재 타이머가 멈추지 않음
  // 2. 다시 실행 상태(true)로 변경되면 타이머가 중복으로 실행됨
  // => 메모리 누수

  return (
    <div>
      <h2>타이머</h2>
      <h3>{seconds}</h3>
      <button onClick={() => setIsRunning(true)}>시작</button>
      <button onClick={() => setIsRunning(false)}>중지</button>
      <button onClick={() => { 
        setSeconds(0) 
        setIsRunning(false); 
      }}>초기화</button>
      <p>
        상태: {isRunning ? '실행중' : '정지됨'}
      </p>
    </div>
  )
}

export default Example4