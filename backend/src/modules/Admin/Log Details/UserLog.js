const mongoose = require('mongoose')

let Schema = mongoose.Schema

let UserInfoSchema = Schema({
    userID:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true
    }
})

const UserInfoModel = new mongoose.model("UserInfoLog", UserInfoSchema)

module.exports = UserInfoModel