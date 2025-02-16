
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'








const SearchPage = () => {
  return (
    <div className='grid grid-cols-4 '>
      <div className='col-span-1 h-1500'>
        <Filter />
      </div>

      <div className='col-span-3'>
        <ProductsList  />
      </div>
    </div>
  )
}

export default SearchPage