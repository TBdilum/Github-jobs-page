import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JobListings from './components/JobListings'
import HomeCards from './components/HomeCards'
import ViewAllJobs from './components/ViewAllJobs'

export default function App(){
  return (
    <div>
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    
</div>
  )
}
