const mongoose = require('mongoose')

const Schema = mongoose.Schema

const StudentLoginSchema = Schema({
    studentuid: {
        type: String,
        required: true,
        unique: true
    },
    rollNo:{
        type:Number,
        required:true,
        unique:true
    },
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const StudentLoginModule = new mongoose.model("StudentLogin", StudentLoginSchema)

module.exports = StudentLoginModule