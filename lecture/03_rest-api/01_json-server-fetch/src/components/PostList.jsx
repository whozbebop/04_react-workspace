import React from 'react'
import postAPI from '../api/postAPI';

// posts === [{id, title, content, author}, {}, ..]
function PostList({ posts, setSelectedPost, setPosts }) { 

  const handlePostClick = (e) => {

    const postId = e.target.dataset.postId;

    // 특정 게시글 한개(자원) 조회(GET) 요청 
    fetch(`http://localhost:3000/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setSelectedPost(data);
      })
      .catch(error => console.log(error.message));
  }

  const handlePostDeleteClick = async (e) => {
    e.stopPropagation(); // 이벤트 전파 막기 (부모이벤트 동작 막기)
    const postId = e.target.closest('li').dataset.postId;

    try {
      await postAPI.deletePost(postId) // 삭제 진행 
      const newPosts = await postAPI.getAllPosts();
      setPosts(newPosts);
      setSelectedPost(null);
    }catch(error) {
      console.log(error.message);
    }
  }


  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li 
            key={post.id} 
            data-post-id={post.id}
            onClick={handlePostClick}>
            {post.title}
            <button onClick={handlePostDeleteClick}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList