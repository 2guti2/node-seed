const { createController } = require('awilix-express')
const auth = require('../auth')
const wrapAsync = require('../wrapAsync')

const API = ({ peopleService }) => ({
  getPeople: wrapAsync(async (req, res) => {
    res.send(await peopleService.getPeople())
  })
})

module.exports = createController(API)
  .before([auth])
  .get('/people', 'getPeople')
