const mongoose = require('mongoose')

let Schema = mongoose.Schema

let CompaniesListSchema = Schema({
    compuid: {
        type: String,
        required: true,
        unique: true
    },
    compName: {
        type: String,
        required: true
    },
    numJobs: {
        type: Number,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

const CompaniesListModel = new mongoose.model("CompaniesList", CompaniesListSchema)

module.exports = CompaniesListModel