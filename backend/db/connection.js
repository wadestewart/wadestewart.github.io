const mongoose = require('mongoose')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/page'
if(process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MLAB_URL)
        .then(connection => console.log(`Connection established to '${connection.db.databaseName}'`))
        .catch(connectionError => console.log('Connection Failed!', connectionError))
} else {
    mongoose.createConnection(mongoUri)
        .then(connection => console.log(`Connection established to '${connection.db.databaseName}'`))
        .catch(connectionError => console.log('Connection Failed!', connectionError))
}

module.exports = mongoose
