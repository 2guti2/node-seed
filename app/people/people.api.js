const { createController } = require('awilix-express')
const authenticate = require('../auth')
const wrapAsync = require('../wrapAsync')

const API = ({ peopleService }) => ({
  getPeople: wrapAsync(async (req, res) => {
    res.send(await peopleService.getPeople())
  })
})

module.exports = createController(API)
  .before([authenticate])
  .get('/people', 'getPeople')
