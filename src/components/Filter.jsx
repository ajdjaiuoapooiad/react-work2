import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import { categories, incomes } from '../../data'
import { Form } from 'react-router-dom'



const Filter = () => {
  const list1 = categories
  const list2 = incomes
  


  return (
    <div className='bg-gray-400 h-screen '>
    
      <div className='text-2xl font-bold p-3'>検索フォーム</div>

      
      
    </div>
  )
}

export default Filter