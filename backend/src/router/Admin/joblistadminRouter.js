const express = require('express')

const JobListModel = require('../../modules/Admin/JobList')

const jlaRouter = new express.Router()

jlaRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



jlaRouter.get("/jobListData", async (req,res)=>{
    try {
        const data = await JobListModel.find()
        res.status(200).send(data)
        console.log('ADMIN JOB LIST Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING ADMIN JOB LIST...',error)
    }
})

jlaRouter.get("/jobListData/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await JobListModel.find({jobId : uid})
        res.status(200).send(data)
        console.log(`ADMIN JOB LIST Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING ADMIN JOB LIST... ${error}`)
    }
})

jlaRouter.post("/jobListData", async (req,res)=>{
    try {
        const data = new JobListModel(req.body)
        const InputData =await data.save()
        console.log("ADMIN JOB LIST INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING ADMIN JOB LIST... ${error}`)
    }
})

jlaRouter.patch("/jobListData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await JobListModel.updateOne({jobId : uid}, req.body)
        res.send(updateData)
        console.log(`ADMIN JOB LIST for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING ADMIN JOB LIST...${error}`)
    }
})

jlaRouter.delete("/jobListData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await JobListModel.deleteOne({jobId : uid})
        res.send(deleteData)
        console.log(`ADMIN JOB LIST Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING ADMIN JOB LIST...${error}`)
    }
})

module.exports = jlaRouter