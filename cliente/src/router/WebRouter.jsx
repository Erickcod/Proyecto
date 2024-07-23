import React from 'react'
import {Routes, Route} from "react-router-dom"
import { ClienteLayout } from "../layouts"
import { Home, Blog, Contact ,Courses ,Post} from "../pages/web"

export function WebRouter() {

  const loadLayout = (Layout, Page) =>{
    return(
      <Layout> 
        <Page />
      </Layout>
    )
  }

  return (
  
        <Routes>
            <Route path ="/" element={loadLayout(ClienteLayout,Home)} />
            <Route path ="/blog" element={loadLayout(ClienteLayout,Blog)} />
            <Route path ="/contact" element={loadLayout(ClienteLayout,Contact)} />
            <Route path ="/courses" element={loadLayout(ClienteLayout,Courses)} />
            <Route path ="/blog/:path" element={loadLayout(ClienteLayout,Post)} />
        </Routes>
    
  )
}
