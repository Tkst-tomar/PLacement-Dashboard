const express = require('express')

const CompaniesListModel = require('../../modules/Admin/CompaniesList')

const claRouter = new express.Router()

claRouter.use(function(req, res, next) {                                                               // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



claRouter.get("/companyListAdminData", async (req,res)=>{
    try {
        const data = await CompaniesListModel.find()
        res.status(200).send(data)
        console.log('COMPANY LIST ADMIN DATA Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING COMPANY LIST ADMIN DATA...',error)
    }
})

claRouter.get("/companyListAdminData/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const data = await CompaniesListModel.find({compuid : uid})
        res.status(200).send(data)
        console.log(`COMPANY LIST ADMIN DATA Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING COMPANY LIST ADMIN DATA... ${error}`)
    }
})

claRouter.post("/companyListAdminData", async (req,res)=>{
    try {
        const data = new CompaniesListModel(req.body)
        const InputData =await data.save()
        console.log("COMPANY LIST ADMIN DATA INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING COMPANY LIST ADMIN DATA... ${error}`)
    }
})

claRouter.patch("/companyListAdminData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const updateData = await CompaniesListModel.updateOne({compuid : uid}, req.body)
        res.send(updateData)
        console.log(`COMPANY LIST ADMIN DATA for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING COMPANY LIST ADMIN DATA...${error}`)
    }
})

claRouter.delete("/companyListAdminData/:id",async (req,res)=>{
    try {
        const uid = req.params.id
        const deleteData = await CompaniesListModel.deleteOne({compuid : uid})
        res.send(deleteData)
        console.log(`COMPANY LIST ADMIN DATA Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING COMPANY LIST ADMIN DATA...${error}`)
    }
})

module.exports = claRouter