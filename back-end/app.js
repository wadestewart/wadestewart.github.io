const express           = require('express')
const personController  = require('./controllers/people')
const cors              = require('cors')

const app               = express()
const PORT              = 4001

app.use(cors())
app.use('/home', personController)

app.listen(PORT, () => console.log(`Live on port ${PORT}`))
