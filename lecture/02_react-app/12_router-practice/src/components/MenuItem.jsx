import React from 'react'
import { useNavigate } from 'react-router-dom'

// 메뉴 한개에 대한 컴포넌트
function MenuItem({menu}) { // menu === {xx:xx, xx:xx, ..}

  const navigate = useNavigate();
  // const handleMenuClick = () => {
  //   navigate(`/menus/${menu.menuCode}`)
  // }

  return (
    <div style={{
      width: '300px',
      border: '1px solid black',
      padding: '0px 10px',
      cursor: 'pointer'
    }} onClick={() => navigate(`/menus/${menu.menuCode}`)}>
      <h3>메뉴명: {menu.menuName}</h3>
      <p>가격: {menu.menuPrice}</p>
    </div>
  )
}

export default MenuItem