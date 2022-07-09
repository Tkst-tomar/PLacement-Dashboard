const express =require('express')

const StudentLoginModule = require('../../modules/Colleges/studentLogin')

const loginRouter = new express.Router()

loginRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");                                                    // CORS Settings
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
  });



loginRouter.get("/studentlogin", async (req,res)=>{
    try {
        const data = await StudentLoginModule.find()
        res.status(200).send(data)
        console.log('Login Data Fetched...')
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE FETCHING LOGIN DATA >>> ${error}`)
    }
})

loginRouter.get("/studentlogin/:roll", async (req,res)=>{
    try {
        const uid = req.params.roll
        const data = await StudentLoginModule.find({rollNo:uid})
        res.status(200).send(data)
        console.log(`Login Data Fetched for Roll no: ${uid}`)
    } catch (error) {
        console.log(`ERROR WHILE FETCHING LOGIN DATA >> ${error}`)
    }
})

loginRouter.post("/studentlogin", async (req,res)=>{
    try {
        const data = new StudentLoginModule(req.body)
        const InputData =await data.save()
        console.log(`Login Data Inserted`)
        res.status(201).send(InputData)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE POSTING LOGIN DATA >>> ${error}`)
    }
})

loginRouter.patch("/studentlogin/:id",async (req,res)=>{
    try {
        const _id = req.params.id
        const updateData = await StudentLoginModule.updateOne({rollNo:_id}, req.body)
        res.send(updateData)
        console.log(`Login Data for ${_id} is successfully updated...`)
    } catch (error) {
        console.log('ERROR ENCOUNTERED WHILE UPDATING LOGIN DATA...',error)
    }
})

loginRouter.delete("/studentlogin/:id", async (req,res)=>{
    try {
        const uid = req.params.id
        const deletedData = await StudentLoginModule.deleteOne({_id : uid})
        res.send(deletedData)
        console.log(`Login Data deleted for ${uid}...`)
    } catch (error) {
        console.log(`ERROR ENCOUNTERED WHILE DELETING LOGIN DATA...`)
    }
})



module.exports = loginRouter