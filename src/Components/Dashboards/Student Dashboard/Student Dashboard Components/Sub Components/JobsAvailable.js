import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SelectedJobInfo } from '../../../../Redux/ACTION/Actions'
let JobId
function JobsAvailable() {
    const [data, setData] = useState()
    const [status, setStatus] = useState(false)
    const userINFO = useSelector((state) => state.UserInfoData)
    const dispatch = useDispatch()

    const getJobInfo = (x) => {
        dispatch(SelectedJobInfo(x))
    }
    const nav = useNavigate()
    useEffect(() => {
        // setStatus()
        const getJobs = async () => {
            await axios.get("http://localhost:4000/jobInfo")
                .then((res) => {
                    setData(res.data)
                    setStatus(true)
                })
        }
        getJobs()
    }, [])
  //  console.log(data)

    const getInfo =async (x) => {
        
        // console.log(count.toString())
        getJobInfo(x)
        nav('viewJob')
    }

    const DisplayJob = () => {
        return (
            <>
                {data?.map((x, index) => {
                //    console.log(x.isActive)
                    if (x.isActive == true) {
                        
                        return (
                            <>
                                <div key={index} className="col-md-3 m-3 p-3 border border-3 rounded d-flex flex-column justify-content-center activeTab">
                                    <div className="col-md-12 ">
                                        <h2>{x.jobTitle}</h2>
                                        <h3 className='lead fw-bolder'>{x.jobSalary}</h3>
                                        <p className="lead">{x.jobDescription}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary " onClick={()=>{getInfo(x)}}>
                                                Know More
                                            </button>
                                        </div>
                                        <div className="col-md-5">
                                            <p className="lead text-sm ">{x.jobCount} peoples have already applied</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    } else if (x.isActive == false) {

                        return (
                            <>
                                <div key={index} className="col-md-3 m-3 p-3 border border-3 rounded d-flex flex-column justify-content-center notActive">
                                    <div className="col-md-12 ">
                                        <h2>{x.jobTitle}</h2>
                                        <h3 className='lead fw-bolder'>{x.jobSalary}</h3>
                                        <p className="lead">{x.jobDescription}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary" onClick={() => {
                                                nav('viewJob')
                                                getJobInfo(x)
                                            }} disabled>
                                                Know More
                                            </button>
                                        </div>
                                        <div className="col-md-5">
                                            <p className="lead text-sm ">{x.jobCount} peoples had applied for this job</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }


                })}
            </>
        )
    }

    const Loading = () => {
        return (
            <>
                <h1>Loading Jobs...</h1>
            </>
        )
    }

    return (
        <>
            <div className="container pb-5">
                <div className="row justify-content-center align-items-center">
                    {status ? <DisplayJob /> : <Loading />}
                </div>
            </div>
        </>
    )
}

export { JobId }
export default JobsAvailable
