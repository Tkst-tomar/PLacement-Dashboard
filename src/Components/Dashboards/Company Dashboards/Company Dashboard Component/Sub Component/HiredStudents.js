import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function HiredStudents() {
  const userINFO = useSelector(state => state.UserInfoData)
  const [ind, setInd] = useState(0)
  const [cls, setCls] = useState(false)
  const [status,setStatus] = useState(false)
  const [displayComponent, setDisplayComponent] = useState(false)
  const [data, setData] = useState(false)
  const [msg, setMsg] = useState('')
  const [msgClass, setMsgClass] = useState('messageHide')

  useEffect(() => {
    const getData = async () => {
      await axios.get(`http://localhost:4000/acceptedCandidateInfo/cid=${userINFO.userData.compuid}`)
        .then(res => {
          setData(res.data)
          // setIsDataFetched(true)
          setDisplayComponent(true)
        })
        .catch(err => {
          console.log(`Error occurred while getting info of Selected Students >>>> ${err}`)
        })
        
    }
    getData()
  }, [])

//  console.log("MASTER DATA >>", data)

  const Loading = () => {
    return (<>
      <div className="display-2 fw-bolder">Loading...</div>
    </>)
  }

  const sendEmail = (index) => {
    if(data[index].signed == false){
      setMsg(`${data[index].candidateInfo.firstName} ${data[index].candidateInfo.lastName} haven't signed into his Offer Letter yet...`)
      setMsgClass('messageDisplay bg-danger text-light')
    }
    setTimeout(() => {
      setMsgClass('messageHide')
    }, 3000);
  }


  const DisplayFullInfo = ()=>{
    return(<>
    <div className='row displayFullInfo'>
          <div className="col-md-8 blur1 border border-dark border-5">
            <div className="row">
              <div className="display-6">
                Personal Information
              </div>
              <div className="row  text-center">
                <div className="col-md-4">
                  <span className='fw-bold' >Name</span><br />
                  {data[ind].candidateInfo.firstName} {data[ind].candidateInfo.lastName}
                </div>
                <div className="col-md-4">
                  <span className='fw-bold' >Gender</span><br />
                  {data[ind].candidateInfo.gender}
                </div>
                <div className="col-md-4">
                  <span className='fw-bold' >Date Of Birth</span><br />
                  {data[ind].candidateInfo.dob}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="display-6">
                Contact information
              </div>
              <div className="row  text-center">
                <div className="col-md-4">
                  <span className='fw-bold' >Phone Number</span><br />
                  {data[ind].candidateInfo.contactInfo.phone}
                </div>
                <div className="col-md-4">
                  <span className='fw-bold' >Alternate Phone Number</span><br />
                  {data[ind].candidateInfo.contactInfo.altPhone}
                </div>
                <div className="col-md-4">
                  <span className='fw-bold' >Email</span><br />
                  {data[ind].candidateInfo.contactInfo.email}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="display-6">
                Qualification
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <div className="lead fw-bolder">
                    Graduation
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <span className='fw-bold' >College Name</span><br />
                      {data[ind].candidateInfo.academicInfo.grad.collegeName}
                    </div>
                    <div className="col-12">
                      <span className='fw-bold' >Marks</span><br />
                      {data[ind].candidateInfo.academicInfo.grad.marks}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="lead fw-bolder">
                    Intermediate
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <span className='fw-bold' >Board</span><br />
                      {data[ind].candidateInfo.academicInfo.intermediate.board}
                    </div>
                    <div className="col-12">
                      <span className='fw-bold' >Stream</span><br />
                      {data[ind].candidateInfo.academicInfo.intermediate.stream}
                    </div>
                    <div className="col-12">
                      <span className='fw-bold' >Marks</span><br />
                      {data[ind].candidateInfo.academicInfo.intermediate.marks}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="lead fw-bolder">
                    High School
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <span className='fw-bold' >Board</span><br />
                      {data[ind].candidateInfo.academicInfo.highSchool.board}
                    </div>
                    <div className="col-12">
                      <span className='fw-bold' >Marks</span><br />
                      {data[ind].candidateInfo.academicInfo.highSchool.marks}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="display-6">
                Job Information
              </div>
              <div className="row  text-center">
                <div className="col-md-4">
                  <span className='fw-bold' >Job Title</span><br />
                  {data[ind].jobInfo.jobTitle}
                </div>
                <div className="col-md-4">
                  <span className='fw-bold'>Salary</span><br />
                  {data[ind].jobInfo.jobSalary}
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-md-4 d-flex justify-content-end">
                <button disabled={data[ind].contacted} className="btn btn-primary" onClick={() => sendEmail(ind)}>
                  {data[ind].contacted ? 'Already Sent' : 'Send Confirmation Email'}
                </button>
              </div>
              <div className="col-md-2 d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => {
                  setCls(false)
                  setMsgClass('none')
                }}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
    </>)
  }

  const displayFullInfo = (index) => {
    setInd(index)
    setCls(true)
  }

  const NoSelected = ()=>{
    return(<>
    <Typography variant='h3'>No Candidates Selected</Typography>
    </>)
  }

  const DisplayComponent = () => {

    return (<>
      <div className="row">
        <div className="col-12">
          <div className="display-4">Selected Candidates</div>
        </div>
      </div>
      <div className="row ">
        {data.map((x, index) => {
          let age = (new Date()).getFullYear() - parseInt(x.candidateInfo.dob.slice(-4))

          if (x.contacted) {
            return (<>
              <div className="row job Accepted" onClick={() => displayFullInfo(index)}>
                <div className="container">
                  <div className="row py-2 justify-content-between">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      {x.candidateInfo.firstName} {x.candidateInfo.lastName}
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      {age}
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                      {x.candidateInfo.academicInfo.grad.collegeName}
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      {x.jobInfo.jobTitle}
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      {x.jobInfo.jobSalary}
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      {x.contacted ? 'SENT' : "NOT SENT"}
                    </div>
                  </div>
                </div>
              </div>
            </>)
          } else {
            return (<>
              <div className="row job" onClick={() => displayFullInfo(index)}>
                <div className="container">
                  <div className="row py-2 justify-content-between">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      {x.candidateInfo.firstName} {x.candidateInfo.lastName}
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      {age}
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                      {x.candidateInfo.academicInfo.grad.collegeName}
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      {x.jobInfo.jobTitle}
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      {x.jobInfo.jobSalary}
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      {x.contacted ? 'SENT' : "NOT SENT"}
                    </div>
                  </div>
                </div>
              </div>
            </>)
          }
        })}
        {cls && <DisplayFullInfo/>}
        {(displayComponent && data.length == 0) && <NoSelected/>}
      </div>
      
    </>)
  }



  return (
    <div className='col-md-11 '>
      {displayComponent ? <DisplayComponent /> : <Loading />}
        <div className={msgClass}>
          {msg}
          {/* This is THe mesage to be displayed */}
        </div>
    </div>
  )
}

export default HiredStudents