const mongoose = require('mongoose')

const Schema = mongoose.Schema

let CompaniesInfoSchema = new Schema({
    compuid: {
        type: String,
        required: true,
        unique: true
    },
    compName: {
        type: String,
        required: true
    },
    jobId:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const CompaniesInfoModel = new mongoose.model("CompaniesInfo", CompaniesInfoSchema)

module.exports = CompaniesInfoModel