const express = require('express')
const bodyParser = require('body-parser')
const expressApp = express()

expressApp.use(bodyParser.json())

module.exports = expressApp
