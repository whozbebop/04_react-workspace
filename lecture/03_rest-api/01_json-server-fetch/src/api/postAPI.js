const BASE_URL = 'http://localhost:3000'

const postAPI = {
  getAllPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  },
  getPostById: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  },
  addPost: async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json(); 
  },
  updatePost: async (id, postData) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Context-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json();
    return data;
  },
  deletePost: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
}

export default postAPI;