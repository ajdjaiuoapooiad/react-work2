import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import db from '../../db';


const CreatePage = () => {
  const [ data,setData ] = useState(db);
  const [ title,setTitle ] = useState('')
  const [ income,setInocme ] = useState('')
  const [ category,setCategory ] = useState('')
  console.log(title, income, category);
  const navigate = useNavigate() // react-router-domのuseNavigateを使う

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(title, income, category);
    

    try {
      navigate('/')
      setData((prevJob) => {
        return [
          ...prevJob,
          { id: 30, title: title, income: income, category: category },
        ];
      });
      console.log('投稿しました');
      
    }catch (error) {
      alert('投稿できませんでした')
    }
  }

  return (
    <div className='container px-12 py-10 '>
      <div className='text-3xl font-bold'>CreatePage</div>
      <form action="" onSubmit={handleSubmit}>

      <div className='my-10'>
        <label htmlFor="" className='font-bold'>タイトル</label><br />
        <input type="text" className=' px-5' onChange={(e) => setTitle(e.target.value)} /><br />
      </div>

      <div className='my-10'>
        <label htmlFor="" className='font-bold'>カテゴリ</label><br />
        <input type="text" className='px-5' onChange={(e) => setCategory(e.target.value)} /><br />
      </div>

      <div className='my-10'>
        <label htmlFor="" className='font-bold'>年収（万円）</label><br />
        <input type="text" className='px-5' onChange={(e) => setInocme(e.target.value)} /><br />
      </div>
        <button type='submit' className='btn bg-gray-500 rounded-md mx-12 p-3 hover:bg-gray-600 text-white'>投稿する</button>
      </form>
    </div>
  )
}

export default CreatePage