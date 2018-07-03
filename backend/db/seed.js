const mongoose = require('./model/page')
const seed = require('./seedData')

const Page = mongoose.model('Page')

mongoose.Promise = Promise

Page.remove({}).then(_ => {
    
})
