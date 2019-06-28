const path = require('path')
const express = require('express')
const beers = require('../routes/beers')
const pubs = require('../routes/pubs')



const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/beers', beers)
server.use('/api/v1/pubs', pubs)


module.exports = server
