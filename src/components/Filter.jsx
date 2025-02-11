import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'


const Filter = () => {


  return (
    <>
    
      <div className='text-3xl'>Filter</div>
      <form action="" className='my-5 mx-12'>
        <FormInput />
 
        <FormSelect />

        <FormSelect />

        <button className='btn btn-primary my-5' type='submit'>検索</button>
      </form>
    </>
  )
}

export default Filter