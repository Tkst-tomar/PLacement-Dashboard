const mongoose = require('mongoose')

let Schema = mongoose.Schema

let StudentInfoSchema = Schema({
    studentuid: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String
    },
    rollNo:{
        type:Number,
        required:true,
        unique:true
    },
    collegeName:{
        type:String,
        required:true
    }
})

const StudentInfoModel = new mongoose.model("StudentAdminInfo", StudentInfoSchema)

module.exports = StudentInfoModel