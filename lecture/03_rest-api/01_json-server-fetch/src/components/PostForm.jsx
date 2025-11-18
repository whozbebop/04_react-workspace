import React from 'react'

function PostForm({formData, onChange, onSubmit}) {

  // 입력값 상태변수
  // 입력값
  // 이벤트 핸들러
  return (
    <div>
      <h2>게시글 등록 폼</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          id="title" 
          placeholder="제목" 
          value={formData.title} 
          onChange={onChange}  
        />
        <br />
        <input 
          type="text" 
          id="content" 
          placeholder="내용" 
          value={formData.content} 
          onChange={onChange} 
        />
        <br />
        <input type="text" id="author" placeholder="작성자명" value={formData.author} onChange={onChange}   />
        <br />
        <input type="submit" value="제출" />
      </form>
    </div>
  )
}

export default PostForm