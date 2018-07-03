const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = 3005

// app.set (PORT, process.env.PORT || 3005)

// let routes = require('./config/routes')
// app.use(routes)

app.listen(app.get(PORT), () => console.log(`Live on ${PORT}`))
