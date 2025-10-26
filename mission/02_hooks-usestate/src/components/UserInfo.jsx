import React, { useState } from 'react'

function UserInfo() {

  const [user, setUser] = useState({
    userName: '홍길동',
    userAge: '24',
    userEmail: 'hong@example.com'
  });

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  return (
    <>
      <form>
        <label htmlFor="userName">이름: </label>
        <input 
          type="text"
          id="userName"
          name="userName"
          value={user.userName}
          onChange={handleUserChange}
        />
        <br />
        <label htmlFor="userAge">나이: </label>
        <input
          type="number" 
          id="userAge"
          name="userAge" 
          value={user.userAge}
          onChange={handleUserChange}
        />
        <br />
        <label htmlFor="userEmail">이메일: </label>
        <input 
          type="email" 
          id="userEmail" 
          name="userEmail"
          value={user.userEmail}
          onChange={handleUserChange}
        />
        <br />
      </form>

      <div>
        <h4>프로필</h4>
        <div>
          {user.userName}({user.userAge})
        </div>
        <div>
          📧 {user.userEmail}
        </div>
      </div>
    </>
  )
}

export default UserInfo