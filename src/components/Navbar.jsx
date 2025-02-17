import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between mx-auto container items-center p-3 text-white'>
                
            <div className='text-3xl '>
                <a href="/" className='hover:text-blue-500 transition-all duration-300'>求人検索アプリ</a>
            </div>


            <div className='space-x-12 font-bold'>
                <a href="/" className='hover:text-blue-500 transition-all duration-300'>ホーム</a>
                <Link to={"/create-post"} className='hover:text-blue-500 transition-all duration-300'>Create</Link>
                <a href="/" className='hover:text-blue-500 transition-all duration-300'>問い合わせ</a>
            </div>


        </nav>
    </>
  )
}

export default Navbar


