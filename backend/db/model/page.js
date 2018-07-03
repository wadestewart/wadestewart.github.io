const mongoose = require('../connection')

const pageSchema = new mongoose.Schema({
    content: String
})

const Page = mongoose.model('Page', pageSchema)

module.exports = Page
