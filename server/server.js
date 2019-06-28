const path = require('path')
const express = require('express')
const beers = require('../routes/beers')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/beers', beers)

module.exports = server
