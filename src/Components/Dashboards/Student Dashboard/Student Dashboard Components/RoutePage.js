import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobApplied from './Sub Components/JobApplied'
import JobsAvailable from './Sub Components/JobsAvailable'
import UpdateProfile from './Sub Components/UpdateProfile'
import ViewJob from './Sub Components/ViewJob'
import ViewProfile from './Sub Components/ViewProfile'

function RoutePage() {
  return (
    <div>
      <Routes>
          <Route index path='jobAvailable' element={<JobsAvailable/>}/>
          <Route path='jobApplied' element={<JobApplied/>}/>
          <Route path='viewProfile' element={<ViewProfile/>}/>
          <Route path='updateProfile' element={<UpdateProfile/>}/>
          <Route path='jobAvailable/viewJob' element={<ViewJob/>}/>
      </Routes>
    </div>
  )
}

export default RoutePage
