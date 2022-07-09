const mongoose = require('mongoose')

let Schema = mongoose.Schema

let EmailSendingData = Schema({
    sender:{
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },
    receiver:{
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },
    message:{
        type:String,
        required:true
    },
    attachment:{
        type:String
    },
    date:{
        type:Date
    }
})

const EmailModule = new mongoose.model('EmailData', EmailSendingData)

module.exports = EmailModule