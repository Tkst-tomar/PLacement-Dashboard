import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { LogOut } from '../../../Redux/ACTION/Actions'
import { studentuid } from '../Student Login Page/SLoginPage'
import LoadingGIF from "./Assets/Loading.gif"
function StudentDashboardheader() {
    const [headValue, setHeadValue] = useState(`Job's Available`)
    const [status, setStatus] = useState(true)
    const [data, setData] = useState()
    const userINFO = useSelector((state)=>state.UserInfoData)
    const nav = useNavigate()
    const dispatch = useDispatch()

    const logOut = ()=>{
        dispatch(LogOut())
    }

   // console.log(userINFO)
    //! This is Block man Comment
    
    return (<>
        <div>
                <div className="container py-5 ">
                    <div className="row justify-content-between align-items-center studentDashboardheader">
                        <div className="col-md-6">
                            <h1 className="text-dark">
                                Welcome {userINFO.userData.firstName} {userINFO.userData.lastName}
                            </h1>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" role="button" id="dropdownMenu2" data-bs-toggle="dropdown">
                                    {headValue}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item btn" onClick={() => {
                                        nav('jobAvailable')
                                        setHeadValue(`Job's Available`)
                                    }}>Job's Available</button></li>
                                    <li><button className="dropdown-item btn" onClick={() => {
                                        nav('jobApplied')
                                        setHeadValue(`Job's Applied`)
                                    }}>job Applied</button></li>
                                    <li><button className="dropdown-item btn" onClick={() => {
                                        nav('viewProfile')
                                        setHeadValue(`View Profile`)
                                    }}>View Profile</button></li>
                                    <li><button className="dropdown-item btn" onClick={() => {
                                        nav('updateProfile')
                                        setHeadValue(`Change Password`)
                                    }}>Change Password</button></li>
                                    <li><button className="dropdown-item btn btn-danger" onClick={() => {
                                        nav('/')
                                        setHeadValue(`Logout`)
                                        logOut()
                                    }}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}


export default StudentDashboardheader