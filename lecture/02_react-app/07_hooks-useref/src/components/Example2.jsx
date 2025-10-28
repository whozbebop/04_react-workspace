import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

// dom 요소 직접 접근하는 사용 예시
function Example2() {

  // 컴포넌트 렌더링시 해당 텍스트 상자에 focusing 효과 주기

  // 1)
  const inputRef = useRef() // {current: }

  // 마운트가 되고나서
  useEffect(() => {
    // 3
    inputRef.current.focus();
  }, [])

  return (
    <>
      <input
        type="text"
        ref={inputRef} // 2) inputRef == {current: input DOM요소객체}
      />
    </>
  )
}

export default Example2