import { Routes, Route, Link } from 'react-router-dom'
import Info from './pages/Info'

function App() {
  return (
    <>
      <nav>
        <Link to="/">홈</Link> | 
        &nbsp;<Link to="/info?name=홍길동">Info1</Link> |
        &nbsp;<Link to="/info?name=홍길동&age=20">Info2</Link> |
        &nbsp;<Link to="/info">Info3</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App

/*
  1. 쿼리 스트링(Query String)
    1) URL에서 ? 뒤에 오는 key=value 쌍 형태의 데이터입니다. 여러 데이터를 &로 구분하여 전달할 수 있습니다.
    2) 주로 페이지/컴포넌트에 필요한 파라미터를 전달할 때 사용합니다.
    3) react-router-dom에서 제공하는 useSearchParams 훅을 통해 쿼리 스트링 값을 가져오거나 수정할 수 있습니다. 

  2. useSearchParams()
    1) react-router-dom에서 제공하는 훅으로, URL의 쿼리 스트링 파라미터에 접근하고 수정할 수 있는 기능을 제공합니다.
    2) 배열을 반환하며, 첫 번째 요소는 URLSearchParams 객체이고, 두 번째 요소는 쿼리 스트링을 수정할 수 있는 함수입니다.
    3) 예시
      const [searchParams] = useSearchParams();
      const name = searchParams.get('name');
      const age = searchParams.get('age');
    4) 쿼리 스트링 값은 항상 문자열(string) 타입입니다. 숫자 등 다른 타입으로 사용하려면 변환이 필요합니다.
*/

/*
  * 동적 세크먼트와 쿼리 스트링의 차이
  1. 동적 세그먼트 - /info/홍길동/20
    1) URL의 특정 위치에 값을 직접 매핑해서 파라미터로 전달
    2) 주로 리소스 고유 식별자를 전달할 때 사용
    3) 예. 상품 상세, 게시글 상세
    4) 라우트 정의하는 곳에 :id, :userId 처럼 세그먼트를 예약어 처리함
    5) 컴포넌트 측에서 useParams() 훅을 통해 세그먼트 값을 가져올 수 있음

  2. 쿼리 스트링 - /info?name=홍길동&age=20
    1) URL의 끝의 ? 뒷부분에 여러 정보를 key=value 쌍으로 전달
    2) 주로 필터링, 검색어, 정렬, 분기처리 등 페이지 표시/동작 옵션을 넘길때 사용
    3) 여러 값을 동시에 넘길 때 편함, 선택적으로 값을 생략하거나 조합 가능
    4) 컴포넌트 측에서 useSearchParams() 훅을 통해 쿼리 스틜  
*/