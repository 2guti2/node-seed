const { createController } = require('awilix-express')
const auth = require('../middleware/auth')
const wrapAsync = require('../middleware/wrapAsync')

const API = ({ peopleService }) => ({
  getPeople: wrapAsync(async (req, res) => {
    res.send(await peopleService.getPerson(+req.params.id))
  })
})

module.exports = createController(API)
  .before([auth])
  .get('/people/:id', 'getPeople')
