
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'




const url = '/'
export const loader = async () => {
  const response = await fetch('http://localhost:3001/api/v1/posts');
  const data = await response.json();
  console.log(data);
  
  return data; // データを返す
};



const SearchPage = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1'>
        Hello
      </div>

      <div className='col-span-3'>
        Hello2
      </div>
    </div>
  )
}

export default SearchPage