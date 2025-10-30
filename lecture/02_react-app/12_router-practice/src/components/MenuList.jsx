import React from 'react'
import MenuItem from './MenuItem'

// 메뉴 목록용 컴포넌트
function MenuList({menus}) { // 렌더링 시킬 메뉴 목록 데이터 전달 받기
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
      {/* {메뉴명: xx, 가격: xx} */}
      {menus.map((menu)=><MenuItem key={menu.menuCode} menu={menu} />)}
    </div>
  )
}

export default MenuList