const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImgSchema = new Schema({
    imgSrc: {
        type: String
    }
})

module.exports = mongoose.model('gallery', ImgSchema)
 
