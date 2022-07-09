const mongoose = require('mongoose')

let Schema = mongoose.Schema

let CollegeListSchema = Schema({
    collegeuid:{
        type:String,
        required:true,
        unique:true
    },
    collegeName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const CollegeListModel = new mongoose.model("CollegeList", CollegeListSchema)

module.exports = CollegeListModel