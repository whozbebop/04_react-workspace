import React from 'react'

function Example2() {

  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <>
      <h2>체크박스와 state</h2>
      <input 
        type="checkbox" 
        id="chk" 
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="chk">체크박스</label>
      <h5>체크여부: {isChecked ? "체크됨" : "체크안됨"}</h5>
    </>
  )
}

export default Example2