
import { useState } from 'react';
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'
import db from '../../db';








const SearchPage = () => {
  const [ data,setData ] = useState(db);

  return (
    <div className='grid grid-cols-4 '>
      <div className='col-span-1 h-1500'>
        <Filter />
      </div>

      <div className='col-span-3'>
        <ProductsList data={data} />
      </div>
    </div>
  )
}

export default SearchPage