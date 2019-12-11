const mongoose = require('mongoose') // Require in mongoose
const Schema = mongoose.Schema // Pull the Schema off of mongoose

// Creating the Author schema from Schema
// Notice the required, default and enum options

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    
  }
})

module.exports = BookSchema // Dont forget to export the Author Schema
