const express = require('express')
const nodeMailer = require('nodemailer')
const EmailModule = require('../../modules/Email Sender/SendEmail')
const path = require('path')
const emailRouter = new express.Router()

emailRouter.post('/sendEmailAndCreateOfferLetter', (req, res, next) => {
    console.log("BODY DATA >>",req.body)
    if (req.body.length > 0) {
        const fileName = ''
        const filePath = ''
        let conn = ''
        if (req.body.gender == 'M') conn = 'Mr.'
        else if (req.body.gender == 'F') conn = 'Mrs.'
        const output = `<h1>Hello ${conn} ${req.body.firstName} ${req.body.lastName},</h1>
    <p>We are happy to inform you were selected for the job of ${req.body.jobTitle} in ${req.body.compName}.</p>
    <p>Kindly go to your dashboard and accept and digitally sign your joining letter</p>
    <p>Once you accept your offer letter digitally, then an email will be automatically sent to you containing your offer letter</p>
    <p>We are excited to have you in ${req.body.compName}. Looking forward to our journey together.</p>`

        let transport = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'tvimlesh470@gmail.com',
                pass: 'tkst695815'
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        let info = transport.sendMail({
            from: `${req.body.compName} <tvimlesh470@gmail.com>`,
            to: req.body.email,
            subject: `Offer Letter From ${req.body.compName}`,
            html: output,
            attachments: [{
                filename: req.body.filename,
                path: req.body.filepath
            }]
        }, (error, info) => {
            if (error) {
                return console.log(error)
            }
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
            res.render({ msg: 'Email has been sent' })
        });
    } else {
        res.send({ msg: 'No Response Sent' })
    }
})

module.exports = emailRouter