import React from 'react'
import { categories } from '../../data';


const FormSelect = ({name, list, defaultValue}) => {
  console.log(list);
    
  
  return (
    <div className='my-12'>
      <select
        className='rounded-2xl'
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