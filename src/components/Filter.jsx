import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import { Form, useLoaderData } from 'react-router-dom'
import { categories, companies } from '../../data'



const Filter = () => {
  const { params } = useLoaderData()
  console.log(params)
  const list1 = categories
  const list2 = companies
  


  return (
    <div className='bg-gray-400 h-screen h-800'>
    
      <div className='text-3xl'>Filter</div>
      <Form className='my-5 mx-12'>

        <FormInput  />
 
        <FormSelect list={list1} />

        <FormSelect  list={list2} />

        <button className='btn bg-gray-600 rounded my-5 p-3' type='submit'>検索</button>
      </Form>
    </div>
  )
}

export default Filter