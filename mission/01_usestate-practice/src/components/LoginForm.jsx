import React, { useState } from 'react'

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isRemember: false,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleLogin = (e) => {
    alert(`로그인 시도!\n사용자: ${formData.username}\n기억하기: ${formData.isRemember ? '예' : '아니오'}`);
    setFormData({
      username: '',
      password: '',
      isRemember: false,
    });
  };

  return (
    <>
      <div>
        <label htmlFor="username">사용자명: </label>
        <input 
          type="text" 
          placeholder="사용자명" 
          id="username" 
          value={formData.username} 
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">비밀번호: </label>
        <input 
          type="password" 
          placeholder="비밀번호" 
          id="password" 
          value={formData.password} 
          onChange={handleInputChange} />
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={formData.isRemember} 
            onChange={(e) => {
              setFormData({...formData, isRemember: e.target.checked});
            }} />
          로그인 상태 유지
        </label>
      </div>
      <div>
        <button 
          type="button" 
          disabled={!formData.username || !formData.password}
          onClick={handleLogin}>로그인</button>
      </div>
    </>
  )
}

export default LoginForm