import React from 'react'
import postAPI from '../api/postAPI';

// posts === [{id, title, content, author}, {}, ..]
function PostList({ posts, setSelectedPost, setPosts }) { 

  const handlePostClick = async (e) => {
    const postId = e.target.dataset.postId;
    try{
      const post = await postAPI.getPostById(postId);
      setSelectedPost(post);
    }catch(error){
      console.log(error.message);
    }    
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