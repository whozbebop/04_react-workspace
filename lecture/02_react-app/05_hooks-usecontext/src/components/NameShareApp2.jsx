import React from 'react'
import { useState } from 'react';
import DisplayName2 from './DisplayName2';
import ChangeName2 from './ChangeName2';
import { createContext } from 'react';

export const NameContext = createContext();

function NameShareApp2() {

  const names = ['이영희', '김철수', '박민수', '홍길동'];
  const [currentName, setCurrentName] = useState("홍길동");

  return (
    <>
      <h1>이름 공유 앱</h1>

      {/* 하위 컴포넌트에서는 가장 가까운 상위 트리의 Provider에서 제공하는 값을 사용할 수 있음 */}
      <NameContext.Provider value={{
        // names: names,
        // currentName: currentName,
        // setCurrentName: setCurrentName
        names, currentName, setCurrentName
      }}>
        <DisplayName2 />
        <ChangeName2 />
      </NameContext.Provider>

    </>
  )
}

export default NameShareApp2