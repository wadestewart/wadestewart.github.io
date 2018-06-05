// Require mongoose middleware for access to query functions
const mongoose = require('mongoose')

// Define key:value pairs of person schema
const personSchema = new.mongoose.Schema({
    img: String,
    link: String
})

// Build a model from the schema and attach to mongoose instance for db query
mongoose.model('Person', personSchema)

module.exports = mongoose

