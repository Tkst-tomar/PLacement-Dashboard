const mongoose = require('mongoose')

let Schema = mongoose.Schema

let JobInfoSchema = Schema({
    compuid: {
        type: String,
        required: true,
        unique: false
    },
    jobId:{
        type:String,
        require:true,
        unique:true
    },
    jobSalary:{
        type:Number,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    jobCount:{
        type:Number,
        required:true
    },
    clgPrefrence:{
        type:String
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const JobInfoModule = mongoose.model("JobInfo", JobInfoSchema)

module.exports = JobInfoModule