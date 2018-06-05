const express = require('express')
const mongoose = require('../homepage-db/connection')

const Person = mongoose.model('Person')

const router = express.Router()

router.get('/', (req, res) => {
    Person
        .find({})
        .then(people => res.json(people))
})

module.exports = router
