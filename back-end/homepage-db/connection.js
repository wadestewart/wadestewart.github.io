const mongoose = require('./models/person')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/person'

mongoose
    .connect(mongoUri, { useMongoClient: true })
    .then(connection => console.log(`connection established to db '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Connection failed!', connectionError))

module.exports = mongoose
