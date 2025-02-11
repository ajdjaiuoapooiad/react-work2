
import { customFetch } from '../utils'
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
    <>
      <div>
        <Filter />
      </div>

      <div>
        <ProductsList />

      </div>
    </>
  )
}

export default SearchPage