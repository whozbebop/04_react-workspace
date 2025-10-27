import React, { useState, useEffect } from 'react'

function Example5() {

  // 코드 실행 흐름적으로 생각해보기
  // 1) 데이터 불러오기 (fetch)
  // 어렵다 해석 필요

  /*let arr = [];
  fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(jsonData => arr = jsonData)

  // 2) 불러온 데이터로 상태변수 초기화
  const [posts, setPosts] = useState(arr) // 현재전체게시글목록배열
  */

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(jsonData => setPosts(jsonData));
  }, []) // 의존성 배열(?) 한번만 실행
  
  /*
    ## useEffect을 통해서 데이터 불러오기
    1. 초기 state - 빈배열로 설정
    2. 컴포넌트 초기 렌더링
       - return 문 실행
       - 화면에 빈 배열로 렌더링 (아무것도 안보임)
       - Mount
    3. useEffect의 setup함수 실행
       - fetch 시작 (데이터요청보내놓기, 백그라운드로 실행)
       
    4. (잠시후) fetch 완료
       - 데이터 받아짐
       - setPosts(데이터) 실행
       - state 업데이트
    5. 컴포넌트 리렌더링
       - return 문 실행
       - 응답된 데이터가 담겨있는 posts 기반으로 렌더링
  */

  return (
    <>
    <h2>전체 게시글 목록</h2>
      {/* 현재 게시글 목록 데이터 출력하기 */}
      {
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default Example5
 
/*
  ## 컴포넌트 본문에 바로 외부 API 통시하는 코드 작성시 문제점
  1. 비동기 타이밍 문제 (fetch는 비동기)

  2. 무한반복 이슈
*/