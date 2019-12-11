const mongoose = require('mongoose') // Require in mongoose
const BookSchema = require('./../schemas/author_schema') // Require in the Author Schema

const BookModel = mongoose.model('book', BookSchema) // Create a author model out of the Book Schema

module.exports = BookModel // Export the Book model
