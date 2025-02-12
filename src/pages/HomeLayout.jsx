import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
       <header className='bg-gray-700'>
         <Navbar />
       </header>
       <Outlet />
    </>
  )
}

export default HomeLayout