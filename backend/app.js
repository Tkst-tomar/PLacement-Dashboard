const express = require('express')     
const expressLayouts = require('express-ejs-layouts')
const path = require('path')                                  //Importing Express
const clglaRouter = require('./src/router/Admin/collegeListAdiminRouter')
const claRouter = require('./src/router/Admin/companyListAdminRouter')
const jlaRouter = require('./src/router/Admin/joblistadminRouter')
const errorLogRouter = require('./src/router/Admin/Log Details Router/ErrorLogRouter')
const UserInfoRouter = require('./src/router/Admin/Log Details Router/UserLogRouter')
const sliRouter = require('./src/router/Admin/studentloginInfoRouter')
const offerLetterRouter = require('./src/router/Call Letter/CallLetterRouter')
const ciRouter = require('./src/router/Colleges/companiesinfoRouter')
const loginRouter = require('./src/router/Colleges/loginRouter')
const masterDataRouter = require('./src/router/Colleges/masterdataRouter')
const jiRouter = require('./src/router/Companies/comapnyJobRouter')
const cc1Router = require('./src/router/Companies/companycandidateInfoRouter')
const emailRouter = require('./src/router/Email Sender/SendEmailRouter')
require('./src/connection/connection')                     //Importing Connection From Database
const app = express()
const PORT = 4000                                                        //Creating PORT

app.use(express.json())
app.use(expressLayouts)

app.set('view engine', 'ejs')
app.use('/docs', express.static(path.join(__dirname, 'docs')))

app.use(loginRouter)
app.use(masterDataRouter)
app.use(ciRouter)
app.use(cc1Router)
app.use(jiRouter)
app.use(sliRouter)
app.use(jlaRouter)
app.use(claRouter)
app.use(clglaRouter)
app.use(errorLogRouter)
app.use(UserInfoRouter)
app.use(emailRouter)
app.use(offerLetterRouter)


app.listen(PORT, ()=>{                                                   //Creating Server
    console.log('Server Created on Port : ',PORT)
})