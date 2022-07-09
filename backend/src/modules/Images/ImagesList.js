const mongoose =require('mongoose')

let Schema = mongoose.Schema

let ImageSchema = Schema({
    ID:{
        type:String,
        required:true,
        unique:true
    },
    ImagePath:{
        type:String,
        required:true,
        unique:true
    }
})

const ImageModel = mongoose.model("ImagesData", ImageSchema)

module.exports = ImageModel