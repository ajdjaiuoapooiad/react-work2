import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import { categories, incomes } from '../../data'
import { Form } from 'react-router-dom'



const Filter = () => {
  const list1 = categories
  const list2 = incomes
  const search = ''
  const category = ''
  const income = ''

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.search.value, e.target.category.value, e.target.income.value)

    try {
      data.filter()
    }catch (error) {
      alert('��索できませんでした')
    }
  }

  


  return (
    <div className='bg-gray-400 h-screen '>
    
      <div className='text-2xl font-bold p-3'>検索フォーム</div>

      
      <Form className='my-5 mx-12' onSubmit={handleSubmit}>

        <FormInput name='search' defaultValue={search}  />
 
        <div className=''>カテゴリ</div>
        <FormSelect name='category' list={list1} defaultValue={category} />

        <div className='pt-10'>年収（万円）</div>
        <FormSelect name='income'  list={list2} defaultValue={income} />

        <button type='submit' className='btn bg-gray-800 rounded-md my-10 p-3 text-white hover:bg-gray-700' >検索</button>
      </Form>
    </div>
  )
}

export default Filter