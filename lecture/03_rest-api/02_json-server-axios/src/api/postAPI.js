
/*
  ## Axios ##
  1. 브라우저와 Node.js에서 사용할 수 있는 HTTP 클라이언트 라이브러리
  2. Promise기반 : async/await와 함께 사용 가능 
  3. 자동 JSON 변환 : 요청/응답 데이터를 자동으로 JSON으로 변환
  4. 인터셉터 : 요청/응답을 가로채서 공통로직 처리 가능 
  5. 에러 처리 : HTTP 에러 상태 코드를 자동으로 처리 

  ## Fetch API와의 차이점 ##
  - Fetch : 브라우저 내장 API (설치 필요 x), .json() 메소드로 수동 변환 필요, 인터셉터 기능 제공x(fetch Wrapper로 대체)
  - Axios : 별도 설치 필요 o, 자동 JSON 변환, 더 간편한 문법 

*/

import axios from 'axios'

/*
  ## Axios 인스턴스 생성 - axios.create() ## 

  설정옵션
  - baseURL : 모든 요청의 기본 URL
  - headers : 모든 요청에 포함될 기본 헤더 
  - timeout : 요청 타임아웃 시간 (밀리초)
  ...

*/
const client = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

/*
  client.get(엔드포인트) - GET 요청 보내기 

  엔드포인트 앞에 baseURL이 자동으로 붙음 
  
  반환값:
  - axios는 응답 객체를 반환 => data 속성에 실제 응답데이터가 담겨있음 (json 변환 처리된)
*/


const postAPI = {
  // 모든 게시글 조회 (GET)
  getAllPosts: async () => {

    const {data} = await client.get('/posts');
    return data;

  },
  getPostById: async (id) => {
    const { data } = await client.get(`/posts/${id}`)
    return data;
  },
  // 게시글 생성 (POST)
  // client.post(url, data)
  addPost: async (postData) => {
    const { data } = await client.post('/posts', postData)
    return data;
  },
  updatePost: async (id, postData) => {
    const { data } = await client.put(`/posts/${id}`, postData)
    return data;
  },
  deletePost: async (id) => {
    const { data } = await client.delete(`/posts/${id}`)
    return data;
  }
}


export default postAPI;

