const express           = require('express')
const personController  = require('./controllers/people')

const app               = express()
const PORT              = 4001

app.listen(PORT, () => console.log(`Live on port ${PORT}`))
