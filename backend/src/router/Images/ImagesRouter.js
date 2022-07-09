const express = require('express')
const multer = require('multer')
const ImageModel = require('../../modules/Images/ImagesList')

const ImageRouter = new express.Router()

ImageRouter.use(function(req, res, next) {                                                             // CORS Settings
    res.header("Access-Control-Allow-Origin", "*");                                                    // CORS Settings
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");      // CORS Settings
    next();                                                                                            // CORS Settings
});

