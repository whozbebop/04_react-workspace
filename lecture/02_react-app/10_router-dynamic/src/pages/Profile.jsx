import React from 'react'
import { useParams } from 'react-router-dom'

// 특정 사용자의 프로필 페이지 : /profile/사용자식별자
function Profile() {

  const {uid} = useParams();
  console.log(uid)

  return (
    <>    
      <div>Profile</div>
      <p>현재 페이지는 {uid}번 회원번호의 사용자 프로필 페이지입니다.</p>
    </>

  )
}

export default Profile