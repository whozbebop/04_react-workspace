function Box() {
  // 이벤트핸들러함수
  const handelMouseOver = () => {
    console.log("마우스가 들어왔어요");
  };
  return (
    <div
      onMouseOver={handelMouseOver}
      onMouseLeave={() => console.log("마우스가 나가졌어요")}
    >
      마우스를 올려보세요.
    </div>
  );
}

export default Box;
