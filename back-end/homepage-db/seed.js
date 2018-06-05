const mongoose = require('./connection')
const seeds = require('./seedData')

const Person = mongoose.model('Person')

mongoose.Promise = Promise

Person.remove({})
    .then(_ => {
        console.log('Dropped Db')
        Person.collection.insert(seeds)
            .then(seededEntries => {
                console.log(seededEntries)
                mongoose.connection.close()
            })
    })


