const app = {}
const container = require('./container')
const routes = require('./routes')
const config = require('./config/config')

app.start = () => {
  config.init(container, routes)
  config.startServer()
}

module.exports = app
