import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'

export const Router = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path:"*",
      element: <>No se encontro la pagina</>
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}

export default Router