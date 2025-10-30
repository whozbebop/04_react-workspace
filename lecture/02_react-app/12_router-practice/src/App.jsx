import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import MenuSearchResult from './pages/MenuSearchResult'
import MenuDetail from './pages/MenuDetail'

function App() {

  /*
    /               메인페이지          MainLayout + Outlet(Home)
    /about          소개페이지          MainLayout + Outlet(About)
    /menus          메뉴목록페이지      MainLayout + Outlet(Menus)
    /menus/:id      메뉴상세페이지      MainLayout + Outlet(MenuDetail)
    /menus/search   메뉴검색결과페이지  MAinLayout + Outlet(MenuSearchResult)
  
  */

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menus">
            <Route index element={<Menus />} /> {/* /menus */}
            <Route path=":id" element={<MenuDetail />} />
            <Route path="search" element={<MenuSearchResult />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
