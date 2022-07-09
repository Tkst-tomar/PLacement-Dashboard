const express = require('express')

const JobInfoModule = require('../../modules/Companies/CompanyJobInfo')

const jiRouter = new express.Router()

jiRouter.use(function (req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");                                                    // CORS Settings
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



jiRouter.get("/jobInfo", async (req, res) => {
    try {
        const data = await JobInfoModule.find()
        res.status(200).send(data)
        console.log('JOB INFO Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING JOB INFO...', error)
    }
})

jiRouter.get("/jobInfo/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const data = await JobInfoModule.find({ $or: [{ jobId: uid }, { compuid: uid }] })
        res.status(200).send(data)
        console.log(`JOB INFO Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING JOB INFO... ${error}`)
    }
})

jiRouter.post("/jobInfo", async (req, res) => {
    try {
        const data = new JobInfoModule(req.body)
        const InputData = await data.save()
        console.log("JOB INFO INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING JOB INFO... ${error}`)
    }
})

jiRouter.patch("/jobInfo/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const updateData = await JobInfoModule.updateOne({ jobId: uid }, req.body)
        res.send(updateData)
        console.log(`JOB INFO for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING JOB INFO...${error}`)
    }
})

jiRouter.delete("/jobInfo/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const deleteData = await JobInfoModule.deleteOne({ jobId: uid })
        res.send(deleteData)
        console.log(`JOB INFO Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING JOB INFO...${error}`)
    }
})

module.exports = jiRouter