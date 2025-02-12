import React, { useState } from 'react'
import axios from 'axios'



const CreatePage = () => {

  const [ title,setTitle ] = useState('')
  const [ income,setInocme ] = useState('')
  const [ category,setCategory ] = useState('')
  console.log(title, income, category);
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(title, income, category);


    try {
      await axios.post('http://localhost:3001/api/v1/posts', {
        title: title,
        category: category,
        income: income,
      })
      console.log('投稿しました');
      
    }catch (error) {
      alert('投稿できませんでした')
    }
  }

  return (
    <>
      <div>CreatePage</div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className='mx-5 my-12' onChange={(e) => setTitle(e.target.value)} /><br />
        <input type="text" className='mx-5 my-12' onChange={(e) => setCategory(e.target.value)} /><br />
        <input type="text" className='mx-5 my-12' onChange={(e) => setInocme(e.target.value)} /><br />
        <button type='submit' className='btn bg-gray-500 rounded-md mx-12'>投稿する</button>
      </form>
    </>
  )
}

export default CreatePage