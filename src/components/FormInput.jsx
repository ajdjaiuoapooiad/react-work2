import React from 'react'

const FormInput = ({name, defaultValue}) => {
  return (
    <div className='my-12'>
      <label htmlFor=""></label>
      <input name={name} defaultValue={defaultValue} />
    </div>
  )
}

export default FormInput