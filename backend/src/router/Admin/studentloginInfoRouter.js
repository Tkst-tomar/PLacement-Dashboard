const express = require('express')

const StudentInfoModel = require('../../modules/Admin/StudentInfo')

const sliRouter = new express.Router()

sliRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



sliRouter.get("/studentAdminLogin", async (req,res)=>{
    try {
        const data = await StudentInfoModel.find()
        res.status(200).send(data)
        console.log('STUDENT LOGIN INFO Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING STUDENT LOGIN INFO...',error)
    }
})

sliRouter.get("/studentAdminLogin/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await StudentInfoModel.find({studentuid : uid})
        res.status(200).send(data)
        console.log(`STUDENT LOGIN INFO Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING STUDENT LOGIN INFO... ${error}`)
    }
})

sliRouter.post("/studentAdminLogin", async (req,res)=>{
    try {
        const data = new StudentInfoModel(req.body)
        const InputData =await data.save()
        console.log("STUDENT LOGIN INFO INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING STUDENT LOGIN INFO... ${error}`)
    }
})

sliRouter.patch("/studentAdminLogin/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await StudentInfoModel.updateOne({studentuid : uid}, req.body)
        res.send(updateData)
        console.log(`STUDENT LOGIN INFO for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING STUDENT LOGIN INFO...${error}`)
    }
})

sliRouter.delete("/studentAdminLogin/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await StudentInfoModel.deleteOne({studentuid : uid})
        res.send(deleteData)
        console.log(`STUDENT LOGIN INFO Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING STUDENT LOGIN INFO...${error}`)
    }
})

module.exports = sliRouter