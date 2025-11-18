import React from 'react'

//  posts === [{id, title, content, author, {}, ...}]
function PostList({ posts, setSelectedPost, setPosts }) {

  const handlePostClick = (e) => {
    // 특정 게시글 한개(자원) 조회(GET) 요청

    const postId = e.target.dataset.postId;

    fetch(`http://localhost:3000/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setSelectedPost(data);
      })
      .catch(error => console.log(error.message));

  }

  const handlePostDeleteClick = (e) => {
    e.stopPropagation() // 이벤트 전파 막기 (버브링)

    const postId = e.target.closest('li').dataset.postId;
    fetch(`http://localhost:3000/posts${postId}`, {
      method: 'DELETE'
    })
    .then(response => response.json)
    .then(data => {
      // 게시물 목록 갱신
      setPosts(posts.filter(post => post.id !== postId))

      // 선택된 게시물 null 변경
      setSelectedPost(null)
    })  
    .catch(error => console.log(error.message))
  }
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li 
            key={post.id}
            data-post-id={post.id}
            onClick={handlePostClick}
          >
            {post.title}
            <button onClick={handlePostDeleteClick}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList