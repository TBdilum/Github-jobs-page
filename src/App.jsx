import {Route,Router,RouterProvider,createRoutesFromElements,createBrowserRouter} from 'react-router-dom';
import React from 'react'
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)
export default function App(){
  return (
    <div>
    <RouterProvider router={router}/>
</div>
  )
}
