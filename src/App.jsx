import {Route,Router,RouterProvider,createRoutesFromElements,createBrowserRouter} from 'react-router-dom';
import React from 'react'
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';

export default function App(){

  const addjob= async(newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE'
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addjob}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  )
  return (
    <div>
    <RouterProvider router={router}/>
</div>
  )
}
