import React, { useState } from 'react'

function Hobby() {

  const [hobbies, setHobbies] = useState({
    reading: false,
    music: false,
    sports: true,
    coding: false,
  });

  const handleCheckboxChange = (e) => {
    setHobbies({
      ...hobbies,
      [e.target.value]: e.target.checked
    });
  }


  return (
    <>
      <div>
        {
          Object.entries(hobbies).map(([hobby, checked]) => (
            <div key={hobby}>
              <input type="checkbox" checked={checked} value={hobby} onChange={handleCheckboxChange} />
              {hobby === 'reading' && '📚독서'}
              {hobby === 'music' && '🎵음악'}
              {hobby === 'sports' && '🤼운동'}
              {hobby === 'coding' && '💻코딩'}
            </div>
          ))
        }
      </div>
      <h3>선택된 취미</h3>
      <div>
        {
          Object.entries(hobbies)
            .filter(([_, checked]) => checked)
            .map(([hobby]) => hobby)
            .join(', ') || '없음'
        }
      </div>
    </>
  )
}

export default Hobby