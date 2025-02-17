import React from 'react'
import db from '../../db';



const FormSelect = ({name, list, defaultValue}) => {
  console.log(list);

  const handleFilter = (e) => {
    console.log(e.target.value);
    // ��り込み処理
    if (name === 'category') {
      const filteredData = db.filter((item) => item.category === e.target.value)
      console.log(filteredData);
    } else {
      const filteredData = db.filter((item) => item.income === Number(e.target.value))
      console.log(filteredData);
    }

    
  }
    
  
  return (
    <div className=''>

      <select
        className='rounded-2xl px-4 py-2'
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => handleFilter(e)}
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