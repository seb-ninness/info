const path = require('path')
const express = require('express')

const route1 = require('./routes/route1')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/route1', route1)

module.exports = server
