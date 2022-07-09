const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/ChetuDashboard")
.then(()=>{
    console.log('Connection Established with Database...')
})
.catch((err)=>{
    console.log(`ERROR ENCOUNTERED >>>  ${err}`)
})