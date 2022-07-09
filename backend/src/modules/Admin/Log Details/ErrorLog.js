const mongoose = require('mongoose')

let Schema = mongoose.Schema

let ErrorLogSchema = Schema({
    erroruid:{
        type:String,
        required:true
    },
    error:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        required:true
    },
    userInfo:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const ErrorLogModel = mongoose.model("ErrorLog", ErrorLogSchema)

module.exports = ErrorLogModel