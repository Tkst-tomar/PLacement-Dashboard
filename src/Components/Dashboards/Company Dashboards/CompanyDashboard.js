import React from 'react'
import CompanyDashboardHeader from './Company Dashboard Component/CompanyDashboardHeader'
import CompanyRoutePage from './Company Dashboard Component/CompanyRoutePage'
import './CompanyDashboard.css'

function CompanyDashboard() {
  return (
    <div className='container-fluid'>
      <div className="container pt-5">
        <div className="row py-4">
          <div className="col-md-2 border dashSidebar">
            <CompanyDashboardHeader />
          </div>
          <div className="col-md-9 mainPage">
            <CompanyRoutePage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboard
