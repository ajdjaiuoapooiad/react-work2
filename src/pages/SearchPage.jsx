import React from 'react'
import { customFetch } from '../utils'
import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'



const url = '/'
export const loader = async () => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  const response = await customFetch(url, { params })
  const products = response.data.data
  const meta = response.data.meta

  return { params, products, meta }
}
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