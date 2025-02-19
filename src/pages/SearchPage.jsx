
import { useEffect, useState } from 'react';
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'
import db from '../../db';
import { useLocation } from 'react-router-dom';








const SearchPage = () => {
  const [ data,setData ] = useState(db);
  const location = useLocation()
  console.log(location);
  const createItem = location.state?.data;
  const title = String(createItem.title)
  const income = Number(createItem.income)
  const category = String(createItem.category)
  console.log(createItem);
  const data2 = { id: 31, title: title, category: category, income: income}

  // 新規登録したデータを追加する
  useEffect(() => {
    setData((prevData) => [...prevData, data2]);
  }, [])
  console.log(data);
  


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