import React, { useState } from 'react'

function ToggleSwitch() {

  const [isChecked, setIsChecked] = useState({
    checkedContent: false,
    checkedMode: false,
  });

  const handleChecked = (e) => {
    setIsChecked({
      ...isChecked,
      [e.target.name] : e.target.checked
    })
  }

  return (
    <>
      <input 
        type="checkbox" 
        checked={isChecked.checkedContent}
        name="checkedContent"
        onChange={handleChecked}
      /> 
      콘텐츠 표시: {isChecked.checkedContent ? '켜짐' : '꺼짐'}
      <br />
      <input 
        type="checkbox" 
        name="checkedMode"
        checked={isChecked.checkedMode}
        onChange={handleChecked}
      /> 
      다크모드: {isChecked.checkedMode ? '🌙' : '🌞'}
      <br/>
      {!isChecked.checkedContent || '🎉 이 메시지는 조건부로 표시됩니다!'}
    </>
  )
}

export default ToggleSwitch