import React from 'react'
import db from '../../db';



const FormSelect = ({name, list, defaultValue}) => {
  console.log(list);

  // const handleFilter = (e) => {
  //   console.log(e.target.value);
  //   // ��り込み処理
  //   const filteredData = db.filter(category === e.target.value)
    
  // }
    
  
  return (
    <div className=''>

      <select
        className='rounded-2xl px-4 py-2'
        name={name}
        defaultValue={defaultValue}
        // onChange={(e) => handleFilter(e.target.value)}
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