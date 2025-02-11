
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'
import { customFetch } from '../utils';




const url = '/'
export const loader = async ({request}) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])

  const response = await customFetch(url, {params});
  const data = await response.data;
  console.log(data, params);
  
  return data; // データを返す
};



const SearchPage = () => {
  return (
    <div className='grid grid-cols-4 '>
      <div className='col-span-1 '>
        <Filter />
      </div>

      <div className='col-span-3'>
        <ProductsList  />
      </div>
    </div>
  )
}

export default SearchPage