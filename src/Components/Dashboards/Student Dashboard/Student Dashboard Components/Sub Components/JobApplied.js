import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// import { studentuid } from '../../Student Login Page/SLoginPage'

function JobApplied() {
    const [data, setData] = useState()
    const [click, setClick] = useState(false)
    const [status, setStatus] = useState(false)
    const [cls, setCls] = useState('none')
    const [disp, setDisp] = useState([])
    const userINFO = useSelector((state) => state.UserInfoData)
    let dispData = []
    const location = useLocation()
   // console.log("Location >> ", location)
    useEffect(() => {
        const getData = async () => {
            await axios.get("http://localhost:4000/candidateInfo/" + userINFO.userData.studentuid)
                .then(res => {
                    setData(res.data)
                    setStatus(true)
                })
        }
        getData()
    }, [])

    // console.log("Student ID", userINFO.userData.studentuid)
    // console.log("Candidate Info Data >>", data)
    const Loading = () => {
        return (<>
            <h1>Loading...</h1>
        </>)
    }

    const callLetter = async (x) => {
        // console.log("INFO>>",x)
        await axios.post(`http://localhost:4000/yourOfferLetter`, x)
            .then(res => {
                console.log("Response >>", res)
            })
            .catch(err => {
                console.log("Error Occured in Frontend>>", err)
            })

    }

    const DisplayMasterData = () => {
    //    console.log(disp)
        return (<>
            <div className="row justify-content-center pt-1">
                <div className="col-md-10 masterBorder">
                    <div className="display-4 text-center fw-bolder pb-4">
                        Information About Selected Application
                    </div>
                    <p className="display-6 text-center">
                        <div className="row">
                            <div className="col-md-6">
                                TITLE :
                            </div>
                            <div className="col-md-6 fw-bolder">
                                {disp[0].jobInfo.jobTitle}
                            </div>
                        </div>
                    </p>
                    <p className="display-6 text-center">
                        <div className="row">
                            <div className="col-md-6">
                                SALARY :
                            </div>
                            <div className="col-md-6 fw-bolder">
                                {disp[0].jobInfo.jobSalary}
                            </div>
                        </div>
                    </p>
                    <p className="display-6 text-center">
                        <div className="row">
                            <div className="col-md-6">
                                COMPANY NAME :
                            </div>
                            <div className="col-md-6 fw-bolder">
                                {disp[0].companyData.compName}
                            </div>
                        </div>
                    </p>
                    <p className="display-6 text-center py-3">
                        <div className="row">
                            <div className="col-md-6">
                                Status :
                            </div>
                            <div className="col-md-6 fw-bolder">
                                {disp[0].status}
                            </div>
                        </div>
                    </p>
                    <div className={disp[0].status == 'Accepted' ? 'display-6 text-center d-flex flex-column justify-content-center align-items-center ' : 'none'}>
                        <p className="lead">
                            Congratulations you have been selected by {disp[0].companyData.compName}. Now please sign the offer letter by clicking the button below
                        </p>

                        <button className="btn btn-success mb-3 mt-2" onClick={() => callLetter(disp[0])}>Sign Offer Letter</button>
                    </div>
                    <button className="btn btn-danger col-md-12" onClick={() => {
                        setClick(false)
                        setCls('none')
                    }}>Back</button>
                </div>
            </div>
        </>)
    }


    const DisplayData = () => {
        return (<>
            {data.map(x => {
              //  console.log(x.status)
                if (x.status == 'Accepted')
                    return (
                        <>
                            <div className='row border justify-content-between mb-3 py-3 align-items-center job Accepted' onClick={() => {
                                setCls('col-md-12 blur3')
                                setDisp([x])
                                setClick(true)
                                // console.log(x)
                            }}>
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder">
                                        {x.jobInfo.jobTitle}
                                    </p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder">
                                        {x.jobInfo.jobSalary}
                                    </p>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder overflow-ellipse">
                                        {x.jobInfo.jobDescription}
                                    </p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder text-center">
                                        {x.companyData.compName}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                else if (x.status == 'Pending')
                    return (
                        <>
                            <div className='row border justify-content-between mb-3 py-3 align-items-center job Pending' onClick={() => {
                                setCls('col-md-12 blur3')
                                setDisp([x])
                                setClick(true)
                                // console.log(x)
                            }}>
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder">
                                        {x.jobInfo.jobTitle}
                                    </p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder">
                                        {x.jobInfo.jobSalary}
                                    </p>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder overflow-ellipse">
                                        {x.jobInfo.jobDescription}
                                    </p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder text-center">
                                        {x.companyData.compName}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                else if (x.status == 'Rejected')
                    return (
                        <>
                            <div className='row border justify-content-between mb-3 py-3 align-items-center job Rejected' onClick={() => {
                                setCls('col-md-12 blur3')
                                setDisp([x])
                                setClick(true)
                                // console.log(x)
                            }}>
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder">
                                        {x.jobInfo.jobTitle}
                                    </p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder">
                                        {x.jobInfo.jobSalary}
                                    </p>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder overflow-ellipse">
                                        {x.jobInfo.jobDescription}
                                    </p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <p className="lead fw-bolder text-center">
                                        {x.companyData.compName}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
            })}
        </>)
    }
    return (
        <div className='container-fluid JobApplied'>
            <div className="container d-flex flex-column align-items-center">
                <h1 className='text-dark'>Jobs Applied for...</h1>
                <div className="col-md-10 pb-1">
                    <div className='row border border-5 rounded justify-content-between mb-1 align-items-center'>
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <p className="lead fw-bolder">
                                Job Title
                            </p>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align--items-center border-end border-start border-5">
                            <p className="lead fw-bolder">
                                Salary
                            </p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center border-5 border-end">
                            <p className="lead fw-bolder">
                                Description
                            </p>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <p className="lead fw-bolder">
                                Company
                            </p>
                        </div>
                    </div>
                    {status ? <DisplayData /> : <Loading />}
                </div>
                <div className={cls}>
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-10">
                            {click && <DisplayMasterData />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobApplied
