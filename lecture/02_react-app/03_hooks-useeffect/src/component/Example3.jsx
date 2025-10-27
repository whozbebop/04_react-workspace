import React from 'react'
import { useState, useEffect } from 'react'

function Example3() {

  const [date, setDate] = useState({
    year: new Date().getFullYear(2),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  })

  useEffect(() => {
    console.log('Example3의 useEffet의 setUp함수 동작')
  }, [date.month, date.day])
  // setUp 함수 동작 시점
  // 의존성 배열에 지정된 값 변화시

  const handleDateChange = (e) => {
    setDate({
      ...date,
      [e.target.id] : e.target.value
      // 현재 change된 입력값만 변경
    })
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="년도" 
        id="year" 
        value={date.year} 
        onChange={handleDateChange}
      />
      <input 
        type="text" 
        placeholder="월" 
        id="month" 
        value={date.month} 
        onChange={handleDateChange}
      />
      <input 
        type="text" 
        placeholder="일" 
        id="day" 
        value={date.day} 
        onChange={handleDateChange}
      />

      <h2>입력날짜 : {date.year}년 {date.month}월 {date.day}일</h2>
    </div>
  )
}

export default Example3