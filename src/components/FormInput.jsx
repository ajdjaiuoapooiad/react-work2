import React from 'react'

const FormInput = ({name, defaultValue}) => {
  return (
    <div className='my-12'>
      <label htmlFor=""></label>
      <input name={name} defaultValue={defaultValue} className='rounded-md px-2' />
    </div>
  )
}

export default FormInput