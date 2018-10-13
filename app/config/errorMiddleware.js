const PeopleError = require('../people/people.error')

module.exports = function errorMiddleware (error, req, res, next) {
  if (error instanceof PeopleError) {
    res.status(404).send({ message: error.message })
  } else {
    res.status(500).send({ message: error.message })
  }

  next()
}
