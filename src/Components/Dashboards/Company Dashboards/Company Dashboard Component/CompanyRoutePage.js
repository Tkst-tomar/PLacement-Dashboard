import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollegesInfo from './Sub Component/CollegesInfo'
import CompanyHome from './Sub Component/CompanyHome'
import HiredStudents from './Sub Component/HiredStudents'
import HiringRequests from './Sub Component/HiringRequests'
import PostingJob from './Sub Component/PostingJob'

function CompanyRoutePage() {
  
  return (

    <div>
      <Routes>
        <Route path='home' element={<CompanyHome/>}/>
        <Route path='postJobDetails' element={<PostingJob/>}/>
        <Route path='hiringRequests' element={<HiringRequests/>}/>
        <Route path='hiredStudents' element={<HiredStudents/>}/>
        <Route path='collegesInfo' element={<CollegesInfo/>}/>
      </Routes>
      
    </div>
  )
}

export default CompanyRoutePage
