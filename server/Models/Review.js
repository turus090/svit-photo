const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewModel = new Schema ({
  name: {
    type: String,
    required: true
  },
  text: { 
    type: String, 
    required: true
  },
  stars: {
    type: Number, 
    required: true
  },
  dateCreated: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Reviews', ReviewModel)