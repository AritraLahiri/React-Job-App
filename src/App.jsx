import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import MainLayout from './Layout/MainLayout'
import JobsPage from './Pages/JobsPage'
import ErrorPage from './Pages/ErrorPage'
import JobDetail from './Pages/JobDetail'
import AddJob from './Pages/AddJob'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/job/:id" element={<JobDetail />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App