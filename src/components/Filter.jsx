import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import { Form, useLoaderData } from 'react-router-dom'
import { categories, incomes } from '../../data'



const Filter = () => {
  const { params } = useLoaderData()
  const { search, category, income } = params
  console.log(params)
  const list1 = categories
  const list2 = incomes
  


  return (
    <div className='bg-gray-400 h-screen h-800'>
    
      <div className='text-3xl'>Filter</div>

      
      <Form className='my-5 mx-12'>

        <FormInput name='search' defaultValue={search}  />
 
        <FormSelect name='category' list={list1} defaultValue={category} />

        <FormSelect name='income'  list={list2} defaultValue={income} />

        <button type='submit' className='btn bg-gray-600 rounded my-5 p-3' >検索</button>
      </Form>
    </div>
  )
}

export default Filter