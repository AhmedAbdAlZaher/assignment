import React from 'react'
import Navbar  from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import About from '../About/About'
import { Outlet } from 'react-router'

export default function LayOut() {
  return (
    <>
    
<Navbar></Navbar>

<Outlet></Outlet>

<Footer></Footer>
    </>
  )
}
