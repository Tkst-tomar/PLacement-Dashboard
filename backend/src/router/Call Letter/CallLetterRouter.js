const express = require('express')

const LetterModel = require('../../modules/Call Letter/CallLetter')

const offerLetterRouter = new express.Router()

const headTitle = {
    name: 'Tarun Tomar',
    address: {
        line1: 'Village - Hindalpur, POST - Galand',
        line2: 'Near Government Polytechnic Institute Dhaulana',
        line3: 'Pilakhwa',
        dist: 'Hapur',
        state: 'Uttar Pradesh',
        pin: 245304
    },
    jobTitle: 'Senior Developer',
    compName: 'ASC IT Solutions',
    startingDate: '26/03/2022',
    desc: 'You are required to complete the given task in the provided time frame and you are also required to help your fellow employees to develop their skills.',
    salary: 450000,
    expDate: '25/03/2022',
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7519b96c-71f8-4040-82d4-c80e18384f1b/dek4lnu-ae752acf-3c98-4cba-ac29-4c9e0f696b44.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1MTliOTZjLTcxZjgtNDA0MC04MmQ0LWM4MGUxODM4NGYxYlwvZGVrNGxudS1hZTc1MmFjZi0zYzk4LTRjYmEtYWMyOS00YzllMGY2OTZiNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r5uPF3mxqVseUHxZUL5D4dorWW1m78BwvtFY2IfY-rs',
    date: new Date()
}

offerLetterRouter.post('/yourOfferLetter', async (req,res)=>{
    try {
        res.render('confirmOfferLetter', {
            title:headTitle
        })
        // console.log(req.body)
    } catch (error) {
        console.log("Error Occured" , error)
    }
})

module.exports = offerLetterRouter