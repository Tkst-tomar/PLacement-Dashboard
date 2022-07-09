import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Validation from '../../../../Utilities/LoginValidation'
// import { studentuid } from '../../Student Login Page/SLoginPage'

function ViewJob() {
    const [data, setData] = useState()
    const [state, setState] = useState(false)
    const [studentInfo, setStudentInfo] = useState()
    const [compData, setCompData] = useState()
    const [dispNotification, setDispNotification] = useState(false)
    const [error,setError] = useState(false)
    const userINFO = useSelector((state) => state.UserInfoData)
    const nav = useNavigate()
    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:4000/jobInfo/${userINFO.jobData.jobId}`)
                .then((res) => {
                    setData(res.data[0])
                })
            await axios.get(`http://localhost:4000/companyListAdminData/${userINFO.jobData.compuid}`)
                .then(res => {
                    setCompData(res.data[0])
                    setState(true)
                })
            await axios.get(`http://localhost:4000/studentMasterData/${userINFO.userData.studentuid}`)
                .then(res => {
                    setStudentInfo(res.data[0])
                })
        }
        getData()
    }, [])
    // console.log("JOB INFORMATION >>", data)
    // console.log("MASTER DATA >>", studentInfo)
    // console.log("COMPANY DATA >>", compData)


    const applyJob = () => {

        // axios.post(`http://localhost:4000/candidateInfo`, { studentuid: userINFO.userData.studentuid, firstName: userINFO.userData.firstName, lastName: userINFO.userData.lastName, jobID: data.jobId, compuid: compData.compuid, status:'Pending', contacted: false })
        //     .then(res => {
        //         console.log(`Data Posted ${res}`)
        //     })
        //     .catch(err => {
        //         console.log(`ERROR OCCURED ${err}`)
        //     })

        axios.post('http://localhost:4000/candidateInfo', { candidateInfo: studentInfo, jobInfo: data, companyData: compData, status: 'Pending', contacted: false, signed: false, offerLetterDownloaded: false })
            .then(res => {
                // console.log("Data Posted", res)
                if (res.status == 208) {
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                        nav(-1)
                    }, 3200);
                } else if (res.status == 201) {
                    setDispNotification(true)
                    setTimeout(() => {
                        nav(-1)
                        setDispNotification(false)
                    }, 3200);
                }
            })
            .catch(err => {
                console.log(`ERROR OCCURED ${err}`)
            })

        let count = userINFO.jobData.jobCount + 1
        axios.patch(`http://localhost:4000/jobInfo/${userINFO.jobData.jobId}`, { jobCount: count })
            .then((res) => {
                console.log("Updated >> ", res)
            })
            .catch((err) => {
                console.log(`Error >> ${err}`)
            })
    }

    const Loading = () => {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    const DisplayComponent = () => {
        if (data.isActive) {

            return (<>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <h1 className='fw-bolder'>
                                Company Name :- {compData.compName}
                            </h1>
                        </div>
                        <div className="row">
                            <h1>
                                Job Title :- {data.jobTitle}
                            </h1>
                        </div>
                        <div className="row">
                            <h3>
                                Salary :- {data.jobSalary}
                            </h3>
                        </div>
                        <div className="row">
                            <p className="lead">
                                Description :- {data.jobDescription}
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center">
                                <button className="btn btn-outline-primary mx-5 col-md-3" onClick={applyJob}>
                                    Apply
                                </button>
                                <button className="btn btn-outline-danger mx-5 col-md-3" onClick={() => { nav(-1) }} disabled={error}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
        }
    }
    return (
        <div>

            {state ? <DisplayComponent /> : <Loading />}
            {dispNotification && <Validation status={dispNotification} passMsg={true} label={`Application for ${data.jobTitle} is sent to ${compData.compName}`} />}
            {error && <Validation status={error} passNegMsg={true} label={`You Have Already Applied For ${data.jobTitle} in ${compData.compName}`}/>}
        </div>
    )
}

export default ViewJob
