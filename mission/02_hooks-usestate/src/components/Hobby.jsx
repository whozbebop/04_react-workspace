import React, { useState } from 'react'

function Hobby() {

  // const [isChecked, setIsChecked] = useState({
  //   checkedReading: false,
  //   checkedMusic: false,
  //   checkedSports: false,
  //   checkedCoding: false,
  // });
  // const [hobby, setHobby] = useState([
  //   '📚 독서',
  //   '🎸 음악',
  //   '🏀 운동',
  //   '💻 코딩',
  // ]);

  const [hobbies, setHobbies] = useState([
    { label: '📚 독서', checked: false },
    { label: '🎸 음악', checked: false },
    { label: '🏀 운동', checked: false },
    { label: '💻 코딩', checked: false },
  ])

  // const handleAddHobby = (e) => {
  //   setIsChecked({
  //     ...isChecked,
  //     [e.target.name] : e.target.checked
  //     // === "checkedReading": true
  //   })
  // }

  const handleAddHobby = (index) => (e) => {
    const updated = [...hobbies];
    updated[index].checked = e.target.checked;
    setHobbies(updated);
  };

  return (
    <>
      {hobbies.map((item, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={handleAddHobby(i)}
          /> {item.label}
        </div>
      ))}

      <h4>선택된 취미</h4>
      <ul style={{listStyle: 'none', display: 'flex', gap: '10px'}}>
        {hobbies
          .filter((item) => item.checked)
          .map((item, i) => (
            <li key={i}>{item.label}</li>
          ))}
      </ul>
    </>
  )
}

export default Hobby