import React, { useEffect, useState } from 'react'
import PostList from './PostList';
import PostForm from './PostForm';
import postAPI from '../api/postAPI';

function PostApp() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 선택된 게시글 데이터 관리 
  const [selectedPost, setSelectedPost] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '', 
    author: '',
  })

  // 세팅 함수를 async 함수로 만들면 안됨
  useEffect(() => {
    // 게시글 목록(자원, Resource) 데이터 조회(행위, GET) 요청 
    setLoading(true);
    
    const fetchPosts = async () => {
      try {
        const posts = await postAPI.getAllPosts();
        setPosts(posts);
      }catch(error) {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    }
    fetchPosts();

  }, [])

  useEffect(() => {
    console.log('선택된 게시글:', selectedPost);
    if(selectedPost) {
      setFormData({
        title: selectedPost.title,
        content: selectedPost.content,
        author: selectedPost.author
      })
    }else {
      setFormData({
        title: '',
        content: '', 
        author: ''
      })
    }
  }, [selectedPost])

  // 폼에 입력값 change발생시 실행될 이벤트핸들러
  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  // 폼에서 등록 요청시 실행될 이벤트핸들러 
  const handleRegistSubmit = async (e) => {
    e.preventDefault(); 
    // 게시글(자원) 데이터 생성(행위, POST) 요청
    setLoading(true);
    try {
      await postAPI.addPost(formData);
      const newPosts = await postAPI.getAllPosts();
      setPosts(newPosts);
      setFormData({
        title: '',
        content: '',
        author: ''
      })
    }catch(error) {
      setError(error.message);
    }finally{
      setLoading(false);
    }
  }

  // 폼에서 수정 요청시 실행할 이벤트핸들러
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    // 현재 선택된 게시글 데이터(자원) 수정(PUT) 요청 
    setLoading(true);
    try{ 
      await postAPI.updatePost(selectedPost.id, formData);
      const newPosts = await postAPI.getAllPosts();
      setPosts(newPosts);
      setSelectedPost(null);
    }catch(error) {
      setError(error.message);
    }finally{
      setLoading(false);
    }
    
  }





  if(loading) return <div>Loading 중...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      
      {/* 게시글 목록 */}
      <PostList 
        posts={posts} 
        setSelectedPost={setSelectedPost}
        setPosts={setPosts} />

      <hr />

      {/* 게시글 등록 폼 */}
      {!selectedPost ? (
        <PostForm 
          formData={formData} 
          onChange={handleFormDataChange}
          onSubmit={handleRegistSubmit} />
      ) : (
        <PostForm 
          formData={formData} 
          onChange={handleFormDataChange}
          onSubmit={handleUpdateSubmit} />
      )}
      




    </div>
  )
}

export default PostApp