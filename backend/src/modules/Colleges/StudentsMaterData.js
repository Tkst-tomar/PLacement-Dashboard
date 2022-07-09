const mongoose = require('mongoose')

let Schema = mongoose.Schema

let StudentMasterDataSchema = Schema({
    studentuid: {
        type:String,
        required:true,
        unique:true,
        
    },
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String
    },
    gender:{
        type:String,
        required:true,
    },
    rollNo:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:String,
        required:true
    },
    contactInfo:{
        phone:{
            type:Number,
            required:true,
            length:10
        },
        altPhone:{
            type:Number,
            length:10
        },
        email:{
            type:String,
            required:true
        }
    },
    academicInfo:{
        highSchool:{
            board:{
                type:String,
                required:true,
            },
            marks:{
                type:Number,
                required:true
            }
        },
        intermediate:{
            board:{
                type:String,
                required:true
            },
            stream:{
                type:String,
                required:true
            },
            marks:{
                type:Number,
                required:true
            }
        },
        grad:{
            collegeName:{
                type:String,
                required:true
            },
            branch:{
                type:String,
                required:true
            },
            marks:{
                type:Number,
                required:true
            }
        }
    }
})


const StudentMasterDataModule = new mongoose.model("StudentsMasterData", StudentMasterDataSchema)

module.exports = StudentMasterDataModule