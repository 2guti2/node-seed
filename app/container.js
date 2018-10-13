const { asClass, createContainer, Lifetime } = require('awilix')
const { scopePerRequest } = require('awilix-express')
const repo = require('./repo')

const container = createContainer()

container.register({
  repo: asClass(repo).scoped()
})

container.loadModules(
  [
    [`${__dirname}/*/*.service.js`, { register: asClass }]
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SINGLETON
    }
  }
)

container.registerServices = (app) => {
  app.use(scopePerRequest(container))
}

module.exports = container
