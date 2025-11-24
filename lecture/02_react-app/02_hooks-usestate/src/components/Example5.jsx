import React, { useState } from 'react'

function Example5() {

  const [user, setUser] = useState({
    userId: '',
    userPwd: ''
  });


  /*
  const handleUserIdChange = (e) => {
    setUser({
      ...user,  // 기존 user 객체가 가진 값을 분해하고
      userId: e.target.value // userId 새로운값으로 덮어씌움
    })    
  }

  const handleUserPwdChange = (e) => {
    setUser({
      ...user,
      userPwd: e.target.value
    })
  }
  */

  // 위의 이벤트 핸들러 함수 통합
  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value // 현재 이벤트가 발생된 입력상자의 입력값만 덮어씌우기
    })
  }

  const handleLoginSubmit = (e) => {
    if(!user.userId.trim() || !user.userPwd.trim()){
      e.preventDefault();
      alert("입력값이 누락되었습니다.");
      return;
    }

    alert(`유효성검사 통과! 로그인 제출 진행됩니다. 
        아이디: ${user.userId}, 비번: ${user.userPwd}`)
  }

  return (
    <>
      <h2>종합예시 - 로그인 폼 (사용자 입력값을 하나의 state변수로 관리)</h2>

      <form action="/login" method="post" onSubmit={handleLoginSubmit}>
        <input 
          type="text" 
          placeholder="아이디 입력"
          name="userId"
          value={user.userId}
          onChange={handleUserChange}
        />
        <br />
        <input 
          type="password" 
          placeholder="비밀번호 입력" 
          name="userPwd"
          value={user.userPwd}
          onChange={handleUserChange}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

export default Example5