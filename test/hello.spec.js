const expect = require('chai').expect
const hello = require('../src/hello')()

describe('Hello', () => {
  describe('.search', () => {
    it('does include a name', () => {
      hello('spock').then((results) => {
        expect(results[0].title).to.include('spock')
      })
    })
  })
})
