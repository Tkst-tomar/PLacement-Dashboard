const mongoose = require('mongoose')

let Schema = mongoose.Schema

let CallLetterInfoSchema = Schema({
    callLetter:{
        type:String,
        // required:true
    },
    studentuid:{
        type:String,
        // required:true
    },
    collegeuid:{
        type:String,
        // required:true
    },
    jobId:{
        type:String,
        // required:true
    },
    compuid:{
        type:String,
        // required:true
    },
    Date:{
        type:Date,
        // required:true
    }
})

const LetterModel = new mongoose.model("OfferLetterInfo", CallLetterInfoSchema)

module.exports = LetterModel