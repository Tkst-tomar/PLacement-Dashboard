const mongoose = require('mongoose')

let Schema = mongoose.Schema

let JobListSchema = Schema({
    compuid: {
        type: String,
        required: true
    },
    jobId:{
        type:String,
        require:true
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
    isActive:{
        type:Boolean,
        required:true
    }
})

const JobListModel = new mongoose.model("JobList", JobListSchema)

module.exports = JobListModel