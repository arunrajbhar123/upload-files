const express = require('express');
const multer = require('multer');

const ImageUpload = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-'  + "."+file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage: storage })


ImageUpload.post('/' ,(req, res) => {


console.log(req)
    res.send('img')
})

module.exports = ImageUpload


