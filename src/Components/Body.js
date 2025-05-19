import React from 'react'
import Header from './Header'
import Login from './Login'
import Browse from './Browse'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {
 const Browser=createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },

      {
        path:"/browse",
      element:<Browse/>,
      },

      
    
  ])
  return (
    <RouterProvider router={Browser}/>
    
  );
}

export default Body
