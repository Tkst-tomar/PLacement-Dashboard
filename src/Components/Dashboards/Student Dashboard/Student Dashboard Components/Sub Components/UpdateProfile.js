import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { USerInfo } from '../../../../Redux/ACTION/Actions'
import Validation from '../../../../Utilities/LoginValidation'
// import { studentuid } from '../../Student Login Page/SLoginPage'

function UpdateProfile() {
  const [data, setData] = useState(false)
  const [msgCls, setMsgCls] = useState('msgHide err')
  const [reset,setReset] = useState(false)
  const [validate, setVlaidate] = useState(false)
  const [newPass, setNewPass] = useState()
  const [clas, setClas] = useState('none')
  const [dis, setDis] = useState('btn btn-primary ms-3')
  const userINFO = useSelector((state) => state.UserInfoData)
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      await axios.get(`http://localhost:4000/studentlogin/${userINFO.userData.rollNo}`)
      .then(res => {
          // setData(res.data[0])
          // console.log(res.data[0])
          dispatch(USerInfo(res.data[0]))
        })
    }
    getData()
   if(reset){
      setMsgCls( 'msgShow success')
    } else {
       setMsgCls('msgHide err')
    }
    setTimeout(() => {
      setMsgCls('msgHide')
    }, 3000);
  }, [reset])

 // console.log("USER DATA >>", userINFO)
  const getNewPass = (e) => {
    setNewPass({
      ...newPass,
      [e.target.name]: e.target.value
    })
    setVlaidate(false)
  }
  const checkPass = () => {
    if(newPass.oldPass != undefined){
      setVlaidate(true)
      if (userINFO.userData.password == newPass.oldPass) {
        setClas('row block mt-5 justify-content-center')
        setDis('none')
        setData(true)
      }
    }
  }
  
  const changePass = () => {
    
    if (newPass.newPass == newPass.confirmNewPass) {
      const patchPass = async () => {
        await axios.patch(`http://localhost:4000/studentlogin/${userINFO.userData.rollNo}`, { password: newPass.confirmNewPass })
        .then((res)=>{
          setDis('btn btn-primary ms-3')
          setReset(true)
          setData(false)
        })

      }
      patchPass()
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <h1 className='col-md-12'>Change Password...</h1>
          </div>
          <Accordion expanded={data}>
            <AccordionSummary>
              <div className="container">

                <div className="row justify-content-center">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="col-md-3">
                      <label htmlFor="staticEmail2" className="visually-hidden">Old Password</label>
                      <input type="text" className="form-control-plaintext" id="staticEmail2" value="Old Password" readOnly />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                      <input type="text" className="form-control" id="inputPassword2" placeholder="Enter Old Password" name='oldPass' onChange={getNewPass} readOnly={data} />
                    </div>
                    <div className="col-md-2">
                      <button type="submit" className={dis} onClick={checkPass} >Confirm</button>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={clas}>
                <div className="col-md-6 p-5 border">
                  <div className="col-12 d-flex pb-3 justify-content-between">
                    <div className="col-md-4">
                      <label htmlFor="staticEmail2" className="visually-hidden">New Password</label>
                      <input type="text" className="form-control-plaintext" id="staticEmail2" value="New Password" readOnly />
                    </div>
                    <div className="col-md-7">
                      <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                      <input type="text" className="form-control" id="inputPassword3" placeholder="Enter New Password" name='newPass' onChange={getNewPass} />
                    </div>
                  </div>
                  <div className="col-12 d-flex pb-3 justify-content-between">
                    <div className="col-md-4">
                      <label htmlFor="staticEmail2" className="visually-hidden">Confirm New Password</label>
                      <input type="text" className="form-control-plaintext" id="staticEmail4" value="Confirm New Password" readOnly />
                    </div>
                    <div className="col-md-7">
                      <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                      <input type="text" className="form-control" id="inputPassword4" placeholder="Confirm New Password" name='confirmNewPass' onChange={getNewPass} />
                    </div>
                  </div>
                  <div className="row  justify-content-end">
                    <div className="col-md-8 d-flex justify-content-end">
                      <button type="button" className="btn btn-danger mb-3 mx-3" onClick={() => {
                        setClas('none')
                        setDis('btn btn-primary ms-3')
                        setData(false)
                      }} >Cancel</button>
                      <button type="submit" className="btn btn-primary mb-3" onClick={changePass} >Confirm</button>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          {validate && <Validation status={validate} label="Password" value={newPass.oldPass} reqValue={userINFO.userData.password}/>}
            <div className="row">
              {/* <div className={reset ? "msgShow success" : 'msgHide err'}> */}
              <div className={msgCls}>
                Password Successfully Changed
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
