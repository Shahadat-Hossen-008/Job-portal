import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'

function MainLayout () {
  return (
    <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default MainLayout