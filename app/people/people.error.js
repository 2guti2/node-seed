class PeopleError extends Error {
  constructor ({ msg }) {
    super(msg)
  }
}

module.exports = PeopleError
