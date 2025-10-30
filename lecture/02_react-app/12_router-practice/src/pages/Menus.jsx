import React, { useEffect, useState } from 'react'
import MenuList from '../components/MenuList'
import { getMenus } from '../api/MenuApi';
import MenuSearchForm from '../components/MenuSearchForm';

// 메뉴 목록 페이지용 컴포넌튼
function Menus() {

  //const menus = getMenus();

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenus());
  }, [])

  return (
    <>
      <h3>메뉴 목록 페이지</h3>
      
      {/* 검색폼 컴포넌트 */}
      <MenuSearchForm />

      {/* 목록 컴포넌트 */}
      {/* menus=전체메뉴목록배열 */}
      <MenuList menus={menus} />
    </>
  )
}

export default Menus