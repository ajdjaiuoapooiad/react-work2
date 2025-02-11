import React from 'react'

const FormSelect = () => {
  const list = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className='my-12'>
      <select
        className='rounded-2xl'
        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
    </div>
  )
}

export default FormSelect