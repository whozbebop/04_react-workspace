import React, { useState } from 'react'

function UserInfo() {

  const [user, setUser] = useState({
    name: '홍길동',
    age: 25,
    email: 'hong@example.com',
  });
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <div>
        이름: <input type="text" id="name" value={user.name} onChange={handleInputChange} />
      </div>
      <div>
        나이: <input type="number" id="age" value={user.age} onChange={handleInputChange} />
      </div>
      <div>
        이메일: <input type="email" id="email" value={user.email} onChange={handleInputChange} />
      </div>
      <h3>프로필</h3>
      <div>
        {user.name} ({user.age === '' ? '0' : user.age}세)
        <br />
        📧 {user.email}
      </div>
    </>
  )
}

export default UserInfo