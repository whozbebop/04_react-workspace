import React from 'react'
import { useContext } from 'react'
import { NameContext } from './NameShareApp2'

// 상태업데이트함수, 이름들데이터(names)
function ChangeName2() {

  const {names, setCurrentName} = useContext(NameContext) // {names: [], currentName: xxx, setCurrentName: f}

  return (
    <>
      {
        names.map((name, index) => (
          <button 
            key={index}
            onClick={() => setCurrentName(name)}
          >{name}</button>
        ))
      }
    </>
  )
}

export default ChangeName2