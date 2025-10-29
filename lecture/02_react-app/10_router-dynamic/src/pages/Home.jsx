import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  
  const [inputValue, setInputValue] = useState({
    category: '',
    id: ''
  });
  const navigate = useNavigate() // f (다른 경로로 이동할 수 있는 기능)
  const handleSubmit = () => {
    navigate(`/practice/${inputValue.category}/${inputValue.id}`)
  }
  return (
    <>
      <div>Home</div>
      {/* 다른 페이지 이동 방식이 링크 형식이 아닌 버튼이나 일반 요소일 경우 */}
      
      {/* location.href='요청할url' == <a> (서버사이드, 깜박거림발생) */}
      <button onClick={() => location.href="/about"}>소개페이지</button>

      <button onClick={() => navigate('/profile/1')}>1번 회원 프로필페이지</button>

      <br />
      <br />

      <div>
        카테고리 : <input type="text" id="category" value={inputValue.category} onChange={(e) => {setInputValue({...inputValue, [e.target.id] : e.target.value})}} />
        <br />
        아이디 : <input type="text" id="id" value={inputValue.id} onChange={(e) => {setInputValue({...inputValue, [e.target.id] : e.target.value})}} />
        <br />
        <button onClick={handleSubmit}>조회</button>
      </div>
    </>
  )
}

export default Home