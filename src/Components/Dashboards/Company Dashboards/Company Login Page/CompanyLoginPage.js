import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { USerInfo } from '../../../Redux/ACTION/Actions'
import Validation from '../../../Utilities/LoginValidation'

function CompanyLoginPage() {
    const nav = useNavigate()
    const [validate, setVlaidate] = useState(false)
    const [count, setCount] = useState(0)
    const [loginInfo, setLoginInfo] = useState()
    const [cls, setCls] = useState('none')
    const [data, setData] = useState()
    const userINFO = useSelector((state)=> state.UserInfoData)
    const dispatch = useDispatch()
    const compDataIn = (x)=>{
        dispatch(USerInfo(x))
    }

    useEffect(()=>{
        setTimeout(()=>{ userINFO.auth && nav('/companyDashboard/postJobDetails') }, 3400)
    },[userINFO.auth])

   // console.log(userINFO)
    const checkLoginData =async ()=>{
        await axios.get("http://localhost:4000/companyListAdminData/"+loginInfo.compuid)
        .then((res)=>{
            setVlaidate(true)
            setData(res.data[0])
            if(res.data[0].compuid == loginInfo.compuid && res.data[0].password == loginInfo.password){
                compDataIn(res.data[0])
                setCls('overlayLogin')
            }
        })
        setCount(count + 1)
    }
   // console.log("DATA >>", data)
    const getLoginInput = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
        setVlaidate(false)
    }
   // console.log(loginInfo)
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-md-8">
                        <div className="row pt-5">
                            <h1 className="text-dark fw-bolder py-5">
                                Company Login...
                            </h1>
                        </div>
                        <div className="row">
                            <div className="form-floating col-md-6 py-2">
                                <input type="text" className="form-control" id="floatingInput" placeholder='First Name' name='compuid' onChange={getLoginInput}/>
                                <label htmlFor="floatingInput" className='px-4'>Company UID</label>
                            </div>
                            <div className="form-floating col-md-6 py-2">
                                <input type="password" className="form-control" id="floatingLastName" placeholder='Last Name' name='password' onChange={getLoginInput}/>
                                <label htmlFor="floatingLastName" className='px-4'>Password</label>
                            </div>
                        </div>
                        <div className="row justify-content-end py-5">
                            <button  className="btn btn-primary rounded-pill px-4 py-2 col-md-3" onClick={checkLoginData}>Login</button>
                        </div>
                    </div>
                </div>
                {(count > 0) && <Validation status={validate} label="Password" value={loginInfo.password} reqValue={data.password}/>}
                
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
        </div>
    )
}

export default CompanyLoginPage
