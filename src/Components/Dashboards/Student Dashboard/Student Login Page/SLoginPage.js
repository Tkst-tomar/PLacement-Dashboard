import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { USerInfo } from '../../../Redux/ACTION/Actions'
import Validation from '../../../Utilities/LoginValidation'
import "./SLoginPage.css"


function SLoginPage() {
    const nav = useNavigate()

    const [userData, setUserData] = useState()
    const [validate, setValidate] = useState(false)
    const [data,setData] = useState()
    const [cls, setCls] = useState('none')
    const userINFO = useSelector((state) => state.UserInfoData)
    const dispatch = useDispatch();
    const userDataIn = (x) => {
        dispatch(USerInfo(x))
    }
    useEffect(() => {
        setTimeout(() => { userINFO.auth && nav('/studentDashboard/jobAvailable') }, 3400)

    }, [userINFO.auth])


    const getLoginData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setValidate(false)
    }




    const checkStatus = async () => {
        const getData = async () => {
            await axios.get(`http://localhost:4000/studentlogin/${userData.rollNo}`)
                .then((res) => {
                    // console.log(userINFO)
                    setData(res.data[0])
                    // console.log(res.data[0])
                    if (res.data[0].firstName == userData.firstName && res.data[0].lastName == userData.lastName && res.data[0].rollNo == userData.rollNo && res.data[0].password == userData.password) {
                        userDataIn(res.data[0])
                        setCls('overlayLogin')
                        // console.log(userINFO)
                    }
                    setValidate(true)
                })
        }
        getData()
    }

// console.log("Validation" , validate)

    return (
        <>
            <div className="container py-5">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-8">
                        <div className="row">
                            <h1 className="text-dark fw-bolder py-5">
                                Student Login...
                            </h1>
                        </div>
                        <div className="row">
                            <div className="form-floating col-md-6 py-2">
                                <input type="text" className="form-control" id="floatingInput" placeholder='First Name' name='firstName' onChange={getLoginData} />
                                <label htmlFor="floatingInput" className='px-4'>First Name</label>
                            </div>
                            <div className="form-floating col-md-6 py-2">
                                <input type="text" className="form-control" id="floatingLastName" placeholder='Last Name' name='lastName' onChange={getLoginData} />
                                <label htmlFor="floatingLastName" className='px-4'>Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-floating col-md-6 py-2 RollNumber">
                                <input type="number" className="form-control" id="floatingInput" placeholder='Roll Number' name='rollNo' onChange={getLoginData} />
                                <label htmlFor="floatingInput" className='px-4'>Roll number</label>
                                <div className="whiteBox"></div>
                            </div>
                            <div className="form-floating col-md-6 py-2">
                                <input type="password" className="form-control" id="floatingPassword" placeholder='Password' name='password' onChange={getLoginData} />
                                <label htmlFor="floatingPassword" className='px-4'>Password</label>
                            </div>
                        </div>
                        <div className="row justify-content-end py-5">
                            <button onClick={checkStatus} className="btn btn-primary rounded-pill px-4 py-2 col-md-3">Login</button>
                        </div>
                    </div>
                </div>
                {validate &&  <Validation status={validate} label='First Name' reqValue={data.firstName} value={userData.firstName}/>}
                {validate &&  <Validation status={validate} label='Last Name' reqValue={data.lastName} value={userData.lastName}/>}
                {validate &&  <Validation status={validate} label='Password' reqValue={data.password} value={userData.password}/>}
                
                <div className={cls}>
                    {/* <div className="col-md-12"> */}
                    <div className="loadingImgBox">
                        <img src="./Assets/LoadingSuccess.gif" alt="Login Successfully...." />
                        </div>
                    {/* </div> */}
                    <p className="lead display-4 text-success">
                        Please Wait, Your dashboard is loading...
                    </p>
                </div>
            </div>
        </>
    )

}


export default SLoginPage
