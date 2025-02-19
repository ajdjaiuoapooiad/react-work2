import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import db from '../../db';
import { listCategories } from '../../data';



const CreatePage = () => {
  const [ data,setData ] = useState(db);
  const [ title,setTitle ] = useState('')
  const [ income,setInocme ] = useState('')
  const [ category,setCategory ] = useState('')
  console.log(title, income, category);
  const navigate = useNavigate() // react-router-domのuseNavigateを使う
  const list = listCategories

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(title, income, category);
    const data = { id: 31, title: title, income: income, category: category }

    try {
      console.log('投稿しました');
      navigate('/',{state: {data}})
      
    }catch (error) {
      alert('投稿できませんでした')
    }
  }

  return (
    <div className='container mx-10 my-10 border-2 w-1/2 border-gray-400 rounded-md'>
      <div  className='mx-20 my-10 '>

        <div className='text-3xl font-bold'>CreatePage</div>
        <form action="" onSubmit={handleSubmit}>

        <div className='my-10'>
          <label htmlFor="" className='font-bold text-2xl '>タイトル</label><br />
          <input type="text" className='w-full px-3 py-2 rounded-2xl my-4' onChange={(e) => setTitle(e.target.value)} /><br />
        </div>

        <div className='my-10'>
          <label htmlFor="" className='font-bold text-2xl'>カテゴリ</label><br />
          {/* <input type="text" className='px-5' onChange={(e) => setCategory(e.target.value)} /><br /> */}
          
          <select
          className='rounded-2xl w-full px-4 py-2 font-bold my-4'
          onChange={(e) => setCategory(e.target.value)}
          typeof='text'
          >
            {list.map((item) => {
              return (
                <option  key={item} value={item} className='font-bold'>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className='my-10'>
          <label htmlFor="" className='font-bold text-2xl'>年収（万円）</label><br />
          <input type="number" className='w-full py-2 px-3 rounded-2xl my-4' onChange={(e) => setInocme(e.target.value)} /><br />
        </div>
          <button type='submit' className='btn bg-gray-700 rounded-md mx-12 p-3 hover:bg-gray-600 text-white'>投稿する</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePage