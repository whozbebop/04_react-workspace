import React, { useState } from 'react'

function Hobby() {

  const [isChecked, setIsChecked] = useState({
    checkedReading: false,
    checkedMusic: false,
    checkedSports: false,
    checkedCoding: false,
  });
  const [hobby, setHobby] = useState([
    '📚 독서',
    '🎸 음악',
    '🏀 운동',
    '💻 코딩',
  ]);

  const handleAddHobby = (e) => {
    setIsChecked({
      ...isChecked,
      [e.target.name] : e.target.checked
      // === "checkedReading": true
    })
  }

  return (
    <>
      <input 
        type="checkbox" 
        checked={isChecked.checkedReading}
        name="checkedReading"
        onChange={handleAddHobby}
      /> 
      📚 독서
      <br />
      <input 
        type="checkbox" 
        checked={isChecked.checkedMusic}
        name="checkedMusic"
        onChange={handleAddHobby}
      /> 
      🎸 음악
      <br />
      <input 
        type="checkbox" 
        checked={isChecked.checkedSports}
        name="checkedSports"
        onChange={handleAddHobby}
      /> 
      🏀 운동
      <br />
      <input 
        type="checkbox" 
        checked={isChecked.checkedCoding}
        name="checkedCoding"
        onChange={handleAddHobby}
      /> 
      💻 코딩

      <h4>선택된 취미</h4>
    </>
  )
}

export default Hobby