var assert = require('assert')
const { describe, it } = require('mocha')
const PeopleService = require('../people/people.service')

describe('People', function () {
  describe('People Service returnOne() method', function () {
    it('should return 1', function () {
      let peopleService = new PeopleService({ getPeople: () => {} })

      assert.strictEqual(peopleService.returnOne(), 1)
    })
  })
})
