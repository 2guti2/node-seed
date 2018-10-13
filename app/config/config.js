let config = {}

const server = require('./express')
const fs = require('./fs')

config.init = (container, routes) => {
  container.registerServices(server)
  routes.configureRoutes(server)
}

config.startServer = () => {
  fs.getPort(startServerOnPort)
}

function startServerOnPort (port) {
  server.listen(port, () => {
    console.log(`Running on port: ${port}`)
  })
};

module.exports = config
