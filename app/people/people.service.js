class PeopleService {
  constructor ({ repo }) {
    this.repo = repo
  }

  getPeople () {
    let ppl = this.repo.getPeople()
    return ppl
  }

  returnOne () {
    return 1
  }
}

module.exports = PeopleService
