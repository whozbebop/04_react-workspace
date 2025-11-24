import menus from '../data/menus.json'
// menus === [{메뉴객체}, {}, ...]

// 메뉴 전체 목록 조회용
function getMenus() {
  return menus;
}

// 메뉴 상세 조회용 
function getMenuDetail(id) { // id === 조회할 메뉴 코드값(전달값)
  return menus.find((menu) => menu.menuCode === parseInt(id));
}

// 메뉴 검색결과 목록 조회용
function searchMenus(condition, keyword) { // condition === 검색조건("menuName"|"categoryName"), keyword === 검색어(키워드)
  return menus.filter((menu) => menu[condition].includes(keyword));
}

export { getMenus, getMenuDetail, searchMenus }
