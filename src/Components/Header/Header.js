import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./Header.css"
import { useSelector } from 'react-redux'

function Header() {
    const [cls,setCls] = useState('/landingPage')
    const userINFO = useSelector((state) => state.UserInfoData)
    useEffect(()=>{
        userINFO.auth === true ? userINFO.userData.firstName ? setCls('/studentDashboard/jobAvailable') : userINFO.userData.compName ? setCls('/companyDashboard/postJobDetails') : setCls('/landingPage') : setCls('/landingPage')
    },[userINFO.auth])
    // console.log(userINFO)
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="Assets/LOGO.svg" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link active" aria-current="page" to="/">About</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link active" aria-current="page" to="/">Contact</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="btn btn-outline-primary rounded-pill px-3" to={cls}>{userINFO.auth === true ? <p className='bottomMargin'>Hello {userINFO.userData.firstName || userINFO.userData.compName}</p> : <p className='bottomMargin'>Login</p>}</Link>
                            </li>
                            <li className="nav-item me-2">
                                <button className="btn btn-outline-primary rounded-pill px-3" to="/">Register</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
