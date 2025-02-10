
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreatePage, HomeLayout, Landing } from './pages'
import SearchPage from './pages/SearchPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/posts',
        element: <SearchPage />,
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