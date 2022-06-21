import { Routes,Route, } from "react-router"
import { lazy, useState } from 'react'
import Home from '../pages/Home'
const Order=lazy(()=>import('../pages/Order'))
const Find=lazy(()=>import('../pages/Find'))
const Mine=lazy(()=>import('../pages/Mine'))
// import Cities from './pages/Cities'
const Cities=lazy(()=>import('../pages/Cities'))
//推迟加载和运行 切换路由后加载 按需加载
// import HomeDetail from './pages/HomeDetail'
const HomeDetail=lazy(()=>import('../pages/HomeDetail'))

export default [
   {
     path:'/',
     element:<Home/>
   },
   {
     path:'/home',
     element:<Home/>
   },
   {
     path:'/find',
     element:<Find/>
   },
   {
     path:'/mine',
     element:<Mine/>
   },
   {
     path:'/order',
     element:<Order/>
   }

]

  //   <Routes>
  //   <Route path="/" element={<Home />}></Route>
  //   <Route path="/home" element={<Home />}></Route>
  //   <Route path="/find" element={<Find />}></Route>
  //   <Route path="/order" element={<Order />}></Route>
  //   <Route path="/mine" element={<Mine />}></Route>
  //   <Route path="/cities" element={<Cities />}></Route>
  //   <Route path="/homedetail" element={<HomeDetail />}></Route>
  // </Routes>
