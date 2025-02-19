
import { useState } from 'react';
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'
import db from '../../db';
import { useLocation } from 'react-router-dom';








const SearchPage = () => {
  const [ data,setData ] = useState(db);
  const location = useLocation()
  console.log(location);
  const createItem = location.state?.data;


  return (
    <div className='grid grid-cols-4 '>
      <div className='col-span-1 h-1500'>
        <Filter data={data} setData={setData} />
      </div>

      <div className='col-span-3'>
        <ProductsList 
        data={data} 
        createItem={createItem}
        />
      </div>
    </div>
  )
}

export default SearchPage