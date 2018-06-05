// Require mongoose middleware for access to query functions
const mongoose = require('mongoose')

// Define key:value pairs of person schema
const PersonSchema = new mongoose.Schema({
    name: String,
    img: String,
    url: String
})

// Build a model from the schema and attach to mongoose instance for db query
mongoose.model('Person', PersonSchema)

// Export for use in other files
module.exports = mongoose

