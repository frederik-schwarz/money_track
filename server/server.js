
const express = require('express')
const path = require('path')

//change routes file to suite new topic then also change this
const moneyRoutes = require('./routes/moneyTrack')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//change the name below to relate to new website
server.use('/api/v1/purchases', moneyRoutes)

module.exports = server