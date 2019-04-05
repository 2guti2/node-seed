// const PeopleError = require('./people.error')

class PeopleService {
  constructor ({ repo }) {
    this.repo = repo
  }

  getPerson (id) {
    let ppl = this.repo.getPeople().find(p => p.id === id)
    return ppl
    // throw new PeopleError({ msg: 'Broken' })
  }

  returnOne () {
    return 1
  }
}

module.exports = PeopleService
