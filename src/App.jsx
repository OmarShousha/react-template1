import { useState } from 'react'
import './App.css'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'
import About from './Components/About'

function App() {
  const myRouter = createHashRouter([
    {path: '', element:<Layout/>, children:[
      {path:'',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
    ]}
  ])

  return (
    <>
    <HashRouter>
      <Routes>
        <RouterProvider router={myRouter}></RouterProvider>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
