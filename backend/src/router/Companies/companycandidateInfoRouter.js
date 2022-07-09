const express = require('express')

const CompanyCandidateModule = require('../../modules/Companies/CompanyCandidateInfo')
// const StudentMasterDataModule = require('../../modules/Colleges/StudentsMaterData')
const cc1Router = new express.Router()

cc1Router.use(function (req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");                                                    // CORS Settings
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



cc1Router.get("/candidateInfo", async (req, res) => {
    try {
        const data = await CompanyCandidateModule.find()
        res.status(200).send(data)
        console.log('CANDIDATE INFO Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING CANDIDATE INFO...', error)
    }
})

cc1Router.get("/candidateInfo/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const data = await CompanyCandidateModule.find({ $or: [{ 'companyData.compuid': uid }, { 'candidateInfo.studentuid': uid }] })
        res.status(200).send(data)
        console.log(`CANDIDATE INFO Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING CANDIDATE INFO... ${error}`)
    }
})

cc1Router.get("/candidateInfotest/:id", async (req, res) => {
    try {
        const uid = req.params.id
        console.log(uid)
        const data = await CompanyCandidateModule.find({ 'candidateInfo.studentuid': uid })
        console.log(data)
        res.status(200).send(data)
        console.log(`CANDIDATE INFO Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING CANDIDATE INFO... ${error}`)
    }
})

cc1Router.get("/acceptedCandidateInfo/cid=:id", async (req, res) => {
    try {
        const uid = req.params.id
        const data = await CompanyCandidateModule.find({ $and: [{ 'companyData.compuid': uid }, { status: "Accepted" }] })
        res.status(200).send(data)
        console.log(`CANDIDATE INFO Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING CANDIDATE INFO... ${error}`)
    }
})

cc1Router.post("/candidateInfo", async (req, res) => {
    try {
        const data = new CompanyCandidateModule(req.body)
        const isApplied = await CompanyCandidateModule.find({ $and: [{ 'jobInfo.jobId': req.body.jobInfo.jobId }, { 'candidateInfo.studentuid': req.body.candidateInfo.studentuid }]})
        console.log("ISAPPLIED >>",isApplied)
        if(isApplied.length > 0){
            res.status(208).send("Already Applied")
        }
        else{
            const InputData = await data.save()
            console.log("CANDIDATE INFO INSERTED...")
            res.status(201).send(InputData)
        }
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING CANDIDATE INFO... ${error}`)
    }
})

cc1Router.post("/candidateInfoTestPOST", async (req, res) => {
    try {
        // router2.get(`/abc/${req.body.queryID}`,  )
        const data = new CompanyCandidateModule(req.body)
        // const masterData = await StudentMasterDataModule.find({studentuid : '112233_ABESEC_24'})
        // console.log(masterData)
        const InputData = await data.save()
        console.log("CANDIDATE INFO INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING CANDIDATE INFO... ${error}`)
    }
})

cc1Router.patch("/candidateInfo/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const updateData = await CompanyCandidateModule.updateMany({ $or: [{ 'candidateInfo.studentuid': uid }, { joID: uid }] }, req.body)
        res.send(updateData)
        console.log(`CANDIDATE INFO for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING CANDIDATE INFO...${error}`)
    }
})

cc1Router.patch("/candidateInfo", async (req, res) => {
    try {
        // const uid = req.params.id
        const updateData = await CompanyCandidateModule.updateMany({}, req.body)
        res.send(updateData)
        console.log(`CANDIDATE INFO for everyone is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING CANDIDATE INFO...${error}`)
    }
})


cc1Router.patch("/candidateInfo123/stuid=:id/juid=:jid", async (req, res) => {
    try {
        const uid = req.params.id
        const juid = req.params.jid
        const jobData = await CompanyCandidateModule.find({ 'jobInfo.jobId': juid })
        // console.log(jobData)
        const serachQuery = jobData.filter(y => {
            // console.log(y.jobInfo.jobId == juid)
            // console.log(y.candidateInfo.studentuid == uid)
            if (y.candidateInfo.studentuid == uid && y.jobInfo.jobId == juid) {
                return y
            }
        })

        console.log(serachQuery)
        const updateData = await CompanyCandidateModule.updateMany({ _id: serachQuery[0]._id }, req.body)
        res.send(updateData)
        console.log(`CANDIDATE INFO for ${uid} and ${juid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING CANDIDATE INFO...${error}`)
    }
})

cc1Router.delete("/candidateInfo/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const deleteData = await CompanyCandidateModule.deleteOne({ 'candidateInfo.studentuid': uid })
        res.send(deleteData)
        console.log(`CANDIDATE INFO Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING CANDIDATE INFO...${error}`)
    }
})

module.exports = cc1Router