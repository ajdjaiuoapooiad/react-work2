
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreatePage, HomeLayout, Landing } from './pages'
import SearchPage from './pages/SearchPage'
import {loader as productLoader } from './pages/SearchPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
        loader: productLoader,
      },
      {
        path: '/create-post',
        element: <CreatePage />,
      },
      
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App