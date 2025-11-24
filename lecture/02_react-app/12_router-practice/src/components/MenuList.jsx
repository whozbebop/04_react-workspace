import React from 'react'
import MenuItem from './MenuItem'

// 메뉴 목록용 컴포넌트
function MenuList({menus}) { // menus === [{}, {}, ...]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {menus.map((menu) => <MenuItem key={menu.menuCode} menu={menu} />)}
    </div>
  )
}

export default MenuList