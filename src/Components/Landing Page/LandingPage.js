import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"


function LandingPage() {
    return (
        <div>
            <div className="container py-2 d-flex justify-content-center landingPage">
                <div className="col-md-9">
                    <h1 className="fw-bolder">Please Select...</h1>
                    <div className="row justify-content-between py-5">
                        <div className="col-md-3">
                            <Link to='/collegesLogin'> 
                            <img src="./Assets/school.png" alt="Colleges..." />
                            <h2 className="lead fw-bolder">COLLEGES</h2>
                            </Link>
                        </div>
                        <div  className="col-md-3">
                            <Link to='/companyLogin'>
                            <img src="./Assets/enterprise.png" alt="Company..." />
                            <h2 className="lead fw-bolder">COMPANY</h2>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to='/studentLogin' className='pngFile'>
                                <img src="./Assets/graduating-student.png" alt="Student..." />
                                <h2 className="lead fw-bolder">STUDENT</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
