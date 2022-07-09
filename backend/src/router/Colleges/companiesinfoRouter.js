const express = require('express')

const CompaniesInfoModel = require('../../modules/Colleges/CompaniesInfo')

const ciRouter = new express.Router()

ciRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});


ciRouter.get("/companiesInfo", async (req,res)=>{
    try {
        const data = await CompaniesInfoModel.find()
        res.status(200).send(data)
        console.log('Companies data fetched...')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING COMPANIES DATA...',error)
    }
})

ciRouter.get("/companiesInfo/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await CompaniesInfoModel.find({compuid : uid})
        res.status(200).send(data)
        console.log(`Data Fetched for Company ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING COMPANY DATA... ${error}`)
    }
})

ciRouter.post("/companiesInfo", async (req,res)=>{
    try {
        const data = new CompaniesInfoModel(req.body)
        const InputData =await data.save()
        console.log("COMPANY DATA INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING COMPANY DATA... ${error}`)
    }
})

ciRouter.patch("/companiesInfo/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await CompaniesInfoModel.updateOne({compuid : uid}, req.body)
        res.send(updateData)
        console.log(`Company data for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING COMPANY DATA...${error}`)
    }
})

ciRouter.delete("/companiesInfo/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await CompaniesInfoModel.deleteOne({compuid : uid})
        res.send(deleteData)
        console.log(`Company Data Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING COMPANY DATA...${error}`)
    }
})

module.exports = ciRouter