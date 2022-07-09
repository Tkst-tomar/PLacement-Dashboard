const express = require('express')

const StudentMasterDataModule = require('../../modules/Colleges/StudentsMaterData')

const masterDataRouter = new express.Router()

masterDataRouter.use(function (req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});



masterDataRouter.get("/studentMasterData", async (req, res) => {
    try {
        const data = await StudentMasterDataModule.find()
        res.status(200).send(data)
        console.log('Master Data Fetched')
    } catch (error) {
        console.log('ERROR OCCURRED WHILE FETCHING MASTER DATA...', error)
    }
})

masterDataRouter.get("/studentMasterData/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const data = await StudentMasterDataModule.find({ $or: [{ studentuid: uid }, { rollNo: uid }] })
        res.status(200).send(data)
        console.log(`Master Data Fetched for ${uid}...`)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE FETCHING MASTER DATA... ${error}`)
    }
})

masterDataRouter.post("/studentMasterData", async (req, res) => {
    try {
        const data = new StudentMasterDataModule(req.body)
        const InputData = await data.save()
        console.log("MASTER DATA INSERTED...")
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR OCCURRED WHILE POSTING MASTER DATA... ${error}`)
    }
})

masterDataRouter.patch("/studentMasterData/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const updateData = await StudentMasterDataModule.updateOne({ rollNo: uid }, req.body)
        res.send(updateData)
        console.log(`Master data for ${uid} is successfully updated...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE UPDATING MASTER DATA...${error}`)
    }
})

masterDataRouter.delete("/studentMasterData/:id", async (req, res) => {
    try {
        const uid = req.params.id
        const deleteData = await StudentMasterDataModule.deleteOne({ rollNo: uid })
        res.send(deleteData)
        console.log(`Master Data Successfully Deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING MASTER DATA...${error}`)
    }
})

module.exports = masterDataRouter