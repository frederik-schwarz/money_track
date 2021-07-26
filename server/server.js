
const express = require('express')
const path = require('path')

//change routes file to suite new topic then also change this
const templateRoutes = require('./routes/changeName')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//change the name below to relate to new website
server.use('/api/v1/ChangeName', templateRoutes)

module.exports = server