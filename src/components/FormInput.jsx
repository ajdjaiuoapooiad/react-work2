import React from 'react'

const FormInput = ({name, defaultValue}) => {
  return (
    <div className='my-12'>
      <div className=''>キーワード</div>
      <input name={name} defaultValue={defaultValue} className='rounded-2xl px-3 py-2 ' />
    </div>
  )
}

export default FormInput