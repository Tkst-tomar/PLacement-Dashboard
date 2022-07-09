import { Accordion, AccordionDetails, AccordionSummary, Collapse, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Scroll } from '../../../../Redux/ACTION/Actions'
// import { studentuid } from '../../Student Login Page/SLoginPage'

function ViewProfile() {
    const [data, setData] = useState()
    const [status, setStatus] = useState(false)
    const [clsStatus, setClsStatus] = useState(false)
    const [clsStatus1, setClsStatus1] = useState(false)
    let array = new Array(6).fill(false)
    const [cls, setCls] = useState()
    const userINFO = useSelector((state) => state.UserInfoData)
    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:4000/studentMasterData/${userINFO.userData.studentuid}`)
                .then(res => {
                    setData(res.data[0])
                    // console.log(`QUERY >>> ${userINFO.userData.rollNo}`)
                    // console.log("FETCHED DATA >>>",res.data[0])
                    setStatus(true)
                    // console.log(studentuid)
                })
        }
        getData()
    }, [])

    const Loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    const DisplayMUITable = () => {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Paper elevation={5}>
                        <Stack spacing={2} direction='column'>
                            <Stack>
                                <Paper elevation={4}>
                                    <Accordion>
                                        <AccordionSummary>
                                            <Typography variant='h3'>
                                                Personal Information
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='subtitle1'>
                                                <TableContainer>
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    Name
                                                                </Typography> </TableCell>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    {data.firstName} {data.lastName}
                                                                </Typography> </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    Date Of Birth
                                                                </Typography> </TableCell>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    {data.dob}
                                                                </Typography> </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    Gender
                                                                </Typography> </TableCell>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    {data.gender}
                                                                </Typography> </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    Roll Number
                                                                </Typography> </TableCell>
                                                                <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                    {data.rollNo}
                                                                </Typography> </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                    </Table>
                                                </TableContainer>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Paper>
                            </Stack>
                            <Stack>
                                <Paper elevation={4}>
                                    <Accordion>
                                        <AccordionSummary>
                                            <Typography variant='h3'>
                                                Contact Information
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <TableContainer>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                Phone Number
                                                            </Typography> </TableCell>
                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                {data.contactInfo.phone}
                                                            </Typography> </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                Alternate Phone Number
                                                            </Typography> </TableCell>
                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                {data.contactInfo.altPhone}
                                                            </Typography> </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                Email
                                                            </Typography> </TableCell>
                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                {data.contactInfo.email}
                                                            </Typography> </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                </Table>
                                            </TableContainer>
                                        </AccordionDetails>
                                    </Accordion>
                                </Paper>
                            </Stack>
                            <Stack>
                                <Paper elevation={4}>
                                    <Accordion>
                                        <AccordionSummary>
                                            <Typography variant='h3'>
                                                Academic Information
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Stack spacing={2}>

                                                <Paper elevation={8}>
                                                    <Accordion>
                                                        <AccordionSummary>
                                                            <Typography variant='h4'>
                                                                High School
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <TableContainer>
                                                                <Table>
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Board
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.highSchool.board}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Marks
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.highSchool.marks}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                </Table>
                                                            </TableContainer>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Paper>
                                                <Paper elevation={8}>
                                                    <Accordion>
                                                        <AccordionSummary>
                                                            <Typography variant='h4'>
                                                                Intermediate
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <TableContainer>
                                                                <Table>
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Board
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.intermediate.board}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Stream
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.intermediate.stream}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Marks
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.intermediate.marks}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                </Table>
                                                            </TableContainer>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Paper>
                                                <Paper elevation={8}>
                                                    <Accordion>
                                                        <AccordionSummary>
                                                            <Typography variant='h4'>
                                                                Graduation
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <TableContainer>
                                                                <Table>
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                College
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.grad.collegeName}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Branch
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.grad.branch}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                Marks
                                                                            </Typography> </TableCell>
                                                                            <TableCell sx={{ width: '50%' }}> <Typography variant='h6'>
                                                                                {data.academicInfo.grad.marks}
                                                                            </Typography> </TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                </Table>
                                                            </TableContainer>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Paper>
                                            </Stack>
                                        </AccordionDetails>
                                    </Accordion>
                                </Paper>
                            </Stack>
                        </Stack>
                    </Paper>
                </div>
            </div>
        )
    }
    return (
        <>
            {status ? <DisplayMUITable /> : <Loading />}
        </>
    )
}

export default ViewProfile
