const PeopleError = require('./people.error')

class PeopleService {
  constructor ({ repo }) {
    this.repo = repo
  }

  getPeople () {
    // let ppl = this.repo.getPeople()
    // return ppl
    throw new PeopleError({ msg: 'Broken' })
  }

  returnOne () {
    return 1
  }
}

module.exports = PeopleService
