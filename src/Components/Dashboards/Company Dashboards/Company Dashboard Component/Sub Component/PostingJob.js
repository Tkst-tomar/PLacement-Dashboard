import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USerInfo } from '../../../../Redux/ACTION/Actions'
import Validation from '../../../../Utilities/LoginValidation'
import './subComponent.css'

function PostingJob() {
  const [job, setJob] = useState()
  const [count, setCount] = useState(0)
  const [compData, setCompData] = useState()
  const [data, setData] = useState()
  const [cls, setCls] = useState('none')
  const [cls1, setCls1] = useState('none')
  const [cls2, setCls2] = useState('none')
  const [message , setMessage] = useState('')
  const [jobTitle ,setJobTitle] = useState('form-control')
  const [jobSalary ,setJobSalary] = useState('form-control')
  const [jobDescription ,setJobDescription] = useState('form-control')
  const [status, setStatus] = useState(false)
  const [dispNotification, setDispNotification] = useState(false)
  const userINFO = useSelector(state => state.UserInfoData)
  const dispatch = useDispatch()
 

  useEffect(() => {
    const getData = async () => {
      setStatus(false)
      await axios.get(`http://localhost:4000/jobInfo/${userINFO.userData.compuid}`)
        .then((res) => {
          setData(res.data)
        //  console.log(res.data)
          setStatus(true)
        })
        await axios.get(`http://localhost:4000/companyListAdminData/${userINFO.userData.compuid}`)
        .then(res =>{
          setCompData(res.data[0])
        })
        .catch(err =>{
          console.log(`ERROR while getting company information ${err}`)
        })
    }
    getData()
  }, [count])

  

 // console.log(compData)

  const getJobInfo = (e) => {


  }

  const submitJob = () => {
    // console.log(jobCode)

    let jobNum = compData.numJobs + 1
    let index = compData.compuid.indexOf("_")
    let jobCode = compData.compuid.slice(0, index + 1) + jobNum + compData.compuid.slice(index)

  //  console.log(jobNum)

    const postData = () => {
      setCls1('overlayLogin')
      axios.post(`http://localhost:4000/jobInfo`, { compuid: userINFO.userData.compuid, jobId: jobCode, jobSalary: job.jobSalary, jobTitle: job.jobTitle, jobDescription: job.jobDescription, jobCount: 0, isActive: true })
      .then(res => {
        console.log(`Data Posted ${res}`)
      })
      .catch(err => {
        console.log(`ERROR OCCURED ${err}`)
      })
      axios.patch(`http://localhost:4000/companyListAdminData/${userINFO.userData.compuid}` , {numJobs : jobNum})
      .then(res => {
        console.log(`No. of Jobs Updated for company id ${userINFO.userData.compuid}`)
        setDispNotification(true)
        setTimeout(() => {
          setDispNotification(false)
          setCls('none')
        }, 3200);
      })
      .catch(err => {
        console.log(`Error during Updating job info...`)
      })
      setCls1('none')
    }
    if (job.jobSalary || job.jobTitle || job.jobDescription) {
      postData()
      setCount(count + 1)
      setCls1('none')
    } else if(job.jobSalary == undefined){
      setJobSalary('form-control border-danger')
    } else if(!job.jobTitle){
      setJobTitle('form-control border-danger')
    } else if(!job.jobDescription){
      setJobDescription('form-control border-danger')
    }
  }
 // console.log(job)
  const Loading = () => {
    return (<>
      <h1>LOADING ....</h1>
    </>)
  }

  const DisplayComponent = () => {
    return (<>
      <div className="col-md-11 ">
        <div className="row justify-content-around">
          <div className="col-md-5">
            <h3 className="display-3">
              Jobs Posted
            </h3>
          </div>
          <div className="col-md-5 d-flex justify-content-end align-items-center">
            <button className="btn btn-outline-primary" onClick={() => setCls('col-12 blur d-flex align-items-center justify-content-center')}>
              Post New Job
            </button>
          </div>
          {/* <hr /> */}
        </div>
        <div className="row pt-4">
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            JOB TITLE
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center border-right border-left">
            APPLICATIONS
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center border-right">
            SALARY OFFERED
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            DESCRIPTION
          </div>
        </div>
        <div className="row">
          {data.map((x) => {
            return (<>
              <div className="job py-3 d-flex justify-content-center align-items-center">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  {x.jobTitle}
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  {x.jobCount}
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  {x.jobSalary}
                </div>
                <div className="col-md-6 d-flex desc">
                  {x.jobDescription}
                </div>
              </div>
            </>)
          })}
        </div>
      </div>
    </>)
  }
  return (
    <div className='col-md-12'>
      {status ? <DisplayComponent /> : <Loading />}

      <div className="row justify-content-center">
        <div className={cls}>
          <div className="floatingBarrier">
            {message}
          </div>
          <div className='col-md-6 border border-dark jobDetails'>
            <h3 className="display-4 p-3">Enter Details...</h3>
            <div className="row justify-content-center py-4">
              <div className="form-floating col-md-10 my-1">
                <input type="text" className="form-control" id="title" placeholder='Last Name' name='jobTitle' onChange={(e) => {
                  setJob({
                    ...job,
                    [e.target.name]: e.target.value
                  })
                }} />
                <label htmlFor="title" className='px-4'>TITLE</label>
              </div>
              <div className="form-floating col-md-10 my-1">
                <input type="number" className="form-control" id="salary" placeholder='Last Name' name='jobSalary' onChange={(e) => {
                  setJob({
                    ...job,
                    [e.target.name]: e.target.value
                  })
                }} />
                <label htmlFor="jobSalary" className='px-4'>SALARY</label>
              </div>
              <div className="form-floating col-md-10 my-1">
                <textarea rows="4" className="form-control" id="description" placeholder='Last Name' name='jobDescription' onChange={(e) => {
                  setJob({
                    ...job,
                    [e.target.name]: e.target.value
                  })
                }} />
                <label htmlFor="description" className='px-4'>DESCRIPTION</label>
              </div>
              <div className="form-floating col-md-10 my-1">
                <input type="text" className="form-control" id="pref" placeholder='Last Name' name='pref' />
                <label htmlFor="pref" className='px-4'>College Preference(if any)</label>
              </div>
              <div className="col-md-10">
              </div>
              <div className="col-md-10 my-2 d-flex justify-content-end">
                <button onClick={() => {
                  setCls('none')
                  setJob()
                }} className="btn btn-danger mx-3">
                  Cancel
                </button>

                <button onClick={submitJob} className="btn btn-primary">
                  Submit
                </button>

              </div>
            </div>
          </div>
        </div>
        {dispNotification && <Validation status={dispNotification} passMsg={true} label={`Job for ${job.jobTitle} is Posted`}/>}
      </div>
      <div className={cls1}>
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
  )
}

export default PostingJob
