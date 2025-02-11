import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'


const Filter = () => {


  return (
    <div className='bg-gray-400 h-screen h-800'>
    
      <div className='text-3xl'>Filter</div>
      <form action="" className='my-5 mx-12'>
        <FormInput />
 
        <FormSelect />

        <FormSelect />

        <button className='btn bg-gray-600 rounded my-5 p-3' type='submit'>検索</button>
      </form>
    </div>
  )
}

export default Filter