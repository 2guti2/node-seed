let config = {}
const server = require('./express')
const fs = require('./fs')
const errorMiddleware = require('./errorMiddleware')

config.init = (container, routes) => {
  container.registerServices(server)
  routes.configureRoutes(server)
}

config.startServer = () => {
  fs.getPort(startServerOnPort)
}

function startServerOnPort (port) {
  // needs to be configured after all the routes to catch their errors
  server.use(errorMiddleware)

  server.listen(port, () => {
    console.log(`Running on port: ${port}`)
  })
};

module.exports = config
