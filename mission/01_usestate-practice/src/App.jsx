import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Favorite from "./components/Favorite";
import Hobby from "./components/Hobby";
import Item from "./components/Item";
import LoginForm from "./components/LoginForm";
import Todos from "./components/Todos";
import ToggleSwitch from "./components/ToggleSwitch";
import UserInfo from "./components/UserInfo";

function App() {


  return (
    <>
      {/* 1) 카운터 컴포넌트 제작 */}
      <h2>카운터</h2>
      <Counter />
      <hr />

      {/* 2) 사용자 정보 컴포넌트 제작 */}
      <h2>사용자 정보</h2>
      <UserInfo />
      <hr />

      {/* 3) 토글 스위치 컴포넌트 제작 */}
      <h2>토글 스위치</h2>
      <ToggleSwitch />
      <hr />

      {/* 4) 취향 선택 컴포넌트 제작 */}
      <h2>취향 선택</h2>
      <Favorite />
      <hr />

      {/* 5) 취미 선택 컴포넌트 제작 */}
      <h2>취미 선택</h2>
      <Hobby />
      <hr />

      {/* 6) 할일(Todo) 컴포넌트 제작 */}
      <h2>할일 목록</h2>
      <Todos />
      <hr />

      {/* 7) 계산기 컴포넌트 제작 */}
      <h2>간단한 계산기</h2>
      <Calculator />
      <hr />

      {/* 8) 아이템 선택 컴포넌트 제작 */}
      <h2>아이템 선택</h2>
      <Item />
      <hr />

      {/* 9) 로그인 폼 컴포넌트 제작 */}
      <h2>로그인 폼</h2>
      <LoginForm />
      <hr />

    </>
  );
}

export default App;
