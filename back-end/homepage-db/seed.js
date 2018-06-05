const mongoose = require('./connection')
const seeds = require('./seedData')

const PersonDb = mongoose.model('PersonDb')

mongoose.Promise = Promise

PersonDb.remove({})
    .then(_ => {
        console.log('Dropped Db')
        PersonDb.collection.insert(seeds)
            .then(seededEntries => {
                console.log(seededEntries)
                mongoose.connection.close()
            })
    })
