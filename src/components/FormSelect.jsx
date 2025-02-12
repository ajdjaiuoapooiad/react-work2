import React from 'react'



const FormSelect = ({name, list, defaultValue}) => {
  console.log(list);
    
  
  return (
    <div className=''>

      <select
        className='rounded-2xl px-4 py-2'
        name={name}
        defaultValue={defaultValue}
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