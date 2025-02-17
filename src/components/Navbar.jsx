import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between mx-auto container items-center p-3 text-white'>
                
            <div className='text-3xl '>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>求人検索アプリ</Link>
            </div>


            <div className='space-x-12 font-bold'>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>ホーム</Link>
                <Link to={"/create-post"} className='hover:text-blue-500 transition-all duration-300'>Create</Link>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>問い合わせ</Link>
            </div>


        </nav>
    </>
  )
}

export default Navbar


