import React, { useState } from 'react'

function Example4() {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState(''); 

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  }

  const handleUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    // 사용자 입력값 가져와서 유효성 체크
    // 유효한 값이 아니면 제출막기 (기본이벤트 막기)
    // 유효한 값이면 알람창으로 사용자 입력값 출력 

    if(!userId.trim() || !userPwd.trim()){
      e.preventDefault();
      alert("입력값이 누락되었습니다.");
      return;
    }

    alert(`유효성검사 통과! 로그인 제출 진행됩니다. 
        아이디: ${userId}, 비번: ${userPwd}`)

  }

  return (
    <>
      <h2>종합예시 - 로그인 폼 (사용자 입력값을 각 개별 state변수로 관리)</h2>

      <form action="/login" method="post" onSubmit={handleLoginSubmit}>
        <input 
          type="text" 
          placeholder="아이디 입력"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
        <br />
        <input 
          type="password" 
          placeholder="비밀번호 입력" 
          name="userPwd"
          value={userPwd}
          onChange={handleUserPwdChange}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

export default Example4