const mongoose = require('./models/person')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost:27017/person'

mongoose
    .createConnection(mongoUri)
    .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Connection failed!', connectionError))

module.exports = mongoose
