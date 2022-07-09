const mongoose = require('mongoose')

let Schema = mongoose.Schema

let CompanyCandidateSchema = Schema({
    candidateInfo: {
        type: Object,
        required: true
    },
    jobInfo: {
        type: Object,
        required: true
    },
    companyData: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["Accepted", "Pending", "Rejected"]
    },
    contacted: {
        type: Boolean
    },
    signed:{
        type:Boolean,
        required:true
    },
    offerLetterDownloaded:{
        type:Boolean,
        required:true
    }
})


const CompanyCandidateModule = new mongoose.model("CandidateInfo", CompanyCandidateSchema)

module.exports = CompanyCandidateModule