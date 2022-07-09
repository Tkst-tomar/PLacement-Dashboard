const express = require('express')

const UserInfoModel = require('../../../modules/Admin/Log Details/UserLog')

const UserInfoRouter = new express.Router()

UserInfoRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



UserInfoRouter.get("/UserInfoData", async (req,res)=>{
    try {
        const data = await UserInfoModel.find()
        res.status(200).send(data)
        console.log('User LOG Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING User LOG...',error)
    }
})

UserInfoRouter.get("/UserInfoData/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await UserInfoModel.find({userID : uid})
        res.status(200).send(data)
        console.log(`User LOG Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING User LOG... ${error}`)
    }
})

UserInfoRouter.post("/UserInfoData", async (req,res)=>{
    try {
        const data = new UserInfoModel(req.body)
        const InputData =await data.save()
        console.log("User LOG INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING User LOG... ${error}`)
    }
})

UserInfoRouter.patch("/UserInfoData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await UserInfoModel.updateOne({userID : uid}, req.body)
        res.send(updateData)
        console.log(`User LOG for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING User LOG...${error}`)
    }
})

UserInfoRouter.delete("/UserInfoData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await UserInfoModel.deleteOne({userID : uid})
        res.send(deleteData)
        console.log(`User LOG Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING User LOG...${error}`)
    }
})

module.exports = UserInfoRouter