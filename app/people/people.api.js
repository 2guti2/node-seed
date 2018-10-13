const { createController } = require('awilix-express')
const authenticate = require('../auth')

const API = ({ peopleService }) => ({
  getPeople: async (req, res) => {
    res.send(await peopleService.getPeople())
  }
})

module.exports = createController(API)
  .before([authenticate])
  .get('/people', 'getPeople')
