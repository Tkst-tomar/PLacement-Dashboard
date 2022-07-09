const express = require('express')

const ErrorLogModel = require('../../../modules/Admin/Log Details/ErrorLog')

const errorLogRouter = new express.Router()

errorLogRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



errorLogRouter.get("/errorLogData", async (req,res)=>{
    try {
        const data = await ErrorLogModel.find()
        res.status(200).send(data)
        console.log('ERROR LOG Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING ERROR LOG...',error)
    }
})

errorLogRouter.get("/errorLogData/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await ErrorLogModel.find({erroruid : uid})
        res.status(200).send(data)
        console.log(`ERROR LOG Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING ERROR LOG... ${error}`)
    }
})

errorLogRouter.post("/errorLogData", async (req,res)=>{
    try {
        const data = new ErrorLogModel(req.body)
        const InputData =await data.save()
        console.log("ERROR LOG INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING ERROR LOG... ${error}`)
    }
})

errorLogRouter.patch("/errorLogData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await ErrorLogModel.updateOne({erroruid : uid}, req.body)
        res.send(updateData)
        console.log(`ERROR LOG for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING ERROR LOG...${error}`)
    }
})

errorLogRouter.delete("/errorLogData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await ErrorLogModel.deleteOne({erroruid : uid})
        res.send(deleteData)
        console.log(`ERROR LOG Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING ERROR LOG...${error}`)
    }
})

module.exports = errorLogRouter