
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'




const url = '/'
export const loader = async ({request}) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])

  const response = await fetch('http://localhost:3001/api/v1/posts', {params});
  const data = await response.json();
  const meta = await response.meta
  console.log(data, params, meta);
  
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