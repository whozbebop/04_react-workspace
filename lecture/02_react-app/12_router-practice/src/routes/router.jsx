import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menus from "../pages/Menus";
import MenuDetail from "../pages/MenuDetail";
import MenuSearchResult from "../pages/MenuSearchResult";


export const router = createBrowserRouter([
  // 각 라우트를 객체 형식으로 작성 
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'menus',
        children: [
          {
            index: true,
            element: <Menus />
          },
          {
            path: ':id',
            element: <MenuDetail />
          },
          {
            path: 'search',
            element: <MenuSearchResult />
          }
        ]
      }
    ]
  }
])