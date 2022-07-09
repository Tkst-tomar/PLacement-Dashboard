import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function HiringRequests() {
  const userINFO = useSelector(state => state.UserInfoData)
  const [stat, setStat] = useState(false)
  const [count, setCount] = useState(0)
  const [val, setVal] = useState('')
  const [data, setData] = useState()
  const [masterData, setMasterData] = useState()
  const [jobData, setJobData] = useState()
  const [cls, setCls] = useState(false)
  const [status, setStatus] = useState(false)
  useEffect(() => {
    const getData = async () => {
      await axios.get(`http://localhost:4000/candidateInfo/${userINFO.userData.compuid}`)
        .then(res => {
          setData(res.data)
          setStatus(true)
        })
        .catch(err => {
          console.log(`Error during getting Student Information of company ${err}`)
        })
    }
    getData()
  }, [count])

  const getJobInfo = (x) => {
 //   console.log(x)
    setVal(x.status)
    setJobData(x.jobInfo)
    setMasterData(x.candidateInfo)
    setCls(true)
  }




  const submitData = (x, y) => {
    if (val == 'Accepted') {
      setStat(true)
    } else {
      setStat(false)
    }
    axios.patch(`http://localhost:4000/candidateInfo123/stuid=${y}/juid=${x}`, { status: val, contacted: stat })
      .then(res => {
        console.log(`Data Uploaded...`)
        setCount(count + 1)
      })
      .catch(err => {
        console.log(`Error Occurred while uploading status >>> ${err}`)
      })
  }


  const DisplayStudentData = () => {
    return (<>
      <div className="row">
        <div className="col-md-12">
          <h2 className="display-5">
            Applied For...
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Title
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {jobData.jobTitle}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Salary
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {jobData.jobSalary}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Status
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {jobData.isActive ? <p>ACTIVE</p> : <p>NOT ACTIVE</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 fw-bolder">
          <h2 className="display-5">
            Candidate Information...
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            NAME
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.firstName} {masterData.lastName}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Date Of Birth
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.dob}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Gender
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.gender}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Phone Number
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.contactInfo.phone}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Alternate Phone
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.contactInfo.altPhone}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Email ID
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.contactInfo.email}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            College Name
          </div>
          <div className="col-md-12 text-center">
            {masterData.academicInfo.grad.collegeName}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Branch
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.academicInfo.grad.branch}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 fw-bolder d-flex justify-content-center">
            Marks
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {masterData.academicInfo.grad.marks}
          </div>
        </div>
      </div>
      <div className="row justify-content-around btnGrp">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div class="btn-group">
            <button type="button" class={val == 'Pending' ? "btn btn-warning dropdown-toggle dpDownWidth" : val == 'Accepted' ? "btn btn-primary dropdown-toggle dpDownWidth" : "btn btn-danger dropdown-toggle dpDownWidth"} data-bs-toggle="dropdown">
              {val}
            </button>
            <div class="dropdown-menu border border-dark">
              <button class="dropdown-item Pending" type="button" onClick={() => { setVal('Pending') }}>Pending</button>
              <button class="dropdown-item Accepted" type="button" onClick={() => { setVal('Accepted') }}>Accepted</button>
              <button class="dropdown-item Rejected" type="button" onClick={() => { setVal('Rejected') }}>Rejected</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <button className='btn btn-primary' onClick={() => { submitData(jobData.jobId, masterData.studentuid) }}>SUBMIT</button>
        </div>
      </div>
    </>)
  }


  const Loading = () => {
    return (<>
      <h1>Loading Data...</h1>
    </>)
  }


  const DisplayComponent = () => {
    return (<>
      <div className="row">
        <h3 className="display-3 ps-4">
          Requests Received...
        </h3>
      </div>
      <div className='row justify-content-around'>
        <div className="col-md-4 border border-dark leftBox">
          <div className='row justify-content-between'>
            <div className="col-6 border d-flex justify-content-center align-items-center fw-bolder">
              Candidate Name
            </div>
            <div className="col-6 border d-flex justify-content-center align-items-center fw-bolder">
              Job Title
            </div>
          </div>
          {data.map(x => {
            // console.log(x)
            return (<div onClick={() => getJobInfo(x)} className={`row  justify-content-between applicationList ${x.status}`}>
              <div className="col-6 d-flex justify-content-center align-items-center">
                {x.candidateInfo.firstName} {x.candidateInfo.lastName}
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center text-center ">
                {x.jobInfo.jobTitle}
              </div>
            </div>)
          })}

        </div>
        <div className="col-md-7 border border-dark rightBox">
          {cls ? <DisplayStudentData /> : <Loading />}
        </div>
      </div>
    </>)
  }
  return (
    <div className='col-md-11 border hiringData'>
      {status ? <DisplayComponent /> : <Loading />}
    </div>
  )
}

export default HiringRequests
