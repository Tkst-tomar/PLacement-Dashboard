import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOut } from '../../../Redux/ACTION/Actions'

function CompanyDashboardHeader() {
  const userINFO = useSelector(state => state.UserInfoData)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const logOut = () => {
    dispatch(LogOut())
  }
 // console.log(userINFO)
  return (
    <div className='container-fluid companyDashboardSidebar'>
      <div className="col-12 py-5 d-flex flex-column justify-content-center align-items-center">
        <div className="companyImage">

        </div>
        <p className="lead fw-bold py-2 CompName">{userINFO.userData.compName}</p>
      </div>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center border-top border-bottom border-dark companyDashboardSidebarBody ">
        <div className="col-md-12 border-top border-bottom border-dark">
          <div onClick={()=>{nav('postJobDetails')}} className="col-md-12 listItem py-2 ">
            <div className="col">
              Job Posted
            </div>
            <div className="col-auto">
              <i class="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
        <div className="col-md-12 border-top border-bottom border-dark">
          <div onClick={()=>{nav('hiringRequests')}} className="col-md-12 listItem py-2 ">
            <div className="col">
              Hiring Request
            </div>
            <div className="col-auto">
              <i class="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
        <div className="col-md-12 border-top border-bottom border-dark">
          <div onClick={()=>{nav('hiredStudents')}} className="col-md-12 listItem py-2 ">
            <div className="col">
              Hired
            </div>
            <div className="col-auto">
              <i class="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
        <div onClick={()=>{nav('collegesInfo')}} className="col-md-12 border-top border-bottom border-dark">
          <div className="col-md-12 listItem py-2 ">
            <div className="col">
              Colleges
            </div>
            <div className="col-auto">
              <i class="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
        <div className="col-md-12 border-top border-bottom border-dark " onClick={() => {
          logOut()
          nav('/landingPage')
        }}>
          <div className="col-md-12 listItem py-2 text-danger fw-bolder">
            <div className="col">
              Logout
            </div>
            <div className="col-auto">
              <i class="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboardHeader
