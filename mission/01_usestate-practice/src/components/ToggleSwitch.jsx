import React, { useState } from 'react'

function ToggleSwitch() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div>
        <label>
          <input type="checkbox" checked={isVisible} onChange={(e) => setIsVisible(e.target.checked)} />
          콘텐츠 표시: {isVisible ? '켜짐' : '꺼짐'}
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
          다크모드: {isDarkMode ? '🌙' : '☀️'}
        </label>
      </div>
      {isVisible && <div>🎉 이 메시지는 조건부로 표시됩니다!</div>}
    </>
  )
}

export default ToggleSwitch