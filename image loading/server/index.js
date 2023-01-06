const express = require('express');
const cors = require('cors')
const app = express()
const ImageUpload=require('./Route/ImageUpload')
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('get')
})


app.use(ImageUpload)



app.listen(8080, () => {
    console.log('server is running on port 8080')
})
