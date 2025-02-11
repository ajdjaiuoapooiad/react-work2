import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
       <div className='text-5xl font-bold'>HomeLayout</div>
       <Outlet />
    </>
  )
}

export default HomeLayout