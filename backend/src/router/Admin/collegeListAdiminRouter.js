const express = require('express')

const CollegeListModel = require('../../modules/Admin/CollegeList')

const clglaRouter = new express.Router()

clglaRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



clglaRouter.get("/collegeListAdminData", async (req,res)=>{
    try {
        const data = await CollegeListModel.find()
        res.status(200).send(data)
        console.log('COLLEGE LIST ADMIN DATA Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING COLLEGE LIST ADMIN DATA...',error)
    }
})

clglaRouter.get("/collegeListAdminData/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await CollegeListModel.find({collegeuid : uid})
        res.status(200).send(data)
        console.log(`COLLEGE LIST ADMIN DATA Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING COLLEGE LIST ADMIN DATA... ${error}`)
    }
})

clglaRouter.post("/collegeListAdminData", async (req,res)=>{
    try {
        const data = new CollegeListModel(req.body)
        const InputData =await data.save()
        console.log("COLLEGE LIST ADMIN DATA INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING COLLEGE LIST ADMIN DATA... ${error}`)
    }
})

clglaRouter.patch("/collegeListAdminData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await CollegeListModel.updateOne({collegeuid : uid}, req.body)
        res.send(updateData)
        console.log(`COLLEGE LIST ADMIN DATA for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING COLLEGE LIST ADMIN DATA...${error}`)
    }
})

clglaRouter.delete("/collegeListAdminData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await CollegeListModel.deleteOne({collegeuid : uid})
        res.send(deleteData)
        console.log(`COLLEGE LIST ADMIN DATA Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING COLLEGE LIST ADMIN DATA...${error}`)
    }
})

module.exports = clglaRouter