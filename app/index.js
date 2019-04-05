const app = {}
const container = require('./ioc/container')
const routes = require('./ioc/routes')
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const errorMiddleware = require('./middleware/errorMiddleware')

server.use(bodyParser.json())

app.start = () => {
  container.registerServices(server)
  routes.configureRoutes(server)
  server.use(errorMiddleware)

  let port = process.env.PORT
  startServerOnPort(port)
}

function startServerOnPort (port) {
  server.listen(port, () => {
    console.log(`Running on port: ${port}`)
  })
};

module.exports = app
