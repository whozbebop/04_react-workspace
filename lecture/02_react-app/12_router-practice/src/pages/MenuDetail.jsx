import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMenuDetail } from '../api/MenuApi';

// 특정 메뉴의 상세 페이지용 컴포넌트
// /menus/:id
function MenuDetail() {

  const [menu, setMenu] = useState();
  const {id} = useParams() // {id: "xx"}

  useEffect(()=>{
    setMenu(getMenuDetail(id))
  }, [])

  return (
    <>
      <h3>메뉴 상세 페이지</h3>

      {menu ? (
        <div>
          <h4>메뉴명: {menu.manuName}</h4>
          <img src={menu.detail.image} alt={menu.menuName} />
          <h4>가격: {menu.menuPrice.toLocaleString()}원</h4>
          <h4>가테고리: {menu.categoryName}</h4>
          <h4>주문가능여부</h4>
          <h4>상세설명: {menu.detail.description}</h4>
        </div>
      ) : (
        <div>조회된 메뉴가 없습니다.</div>
      )}

    </>
  )
}

export default MenuDetail