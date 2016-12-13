const expect = require('chai').expect
const hello = require('../src/hello')()

describe('Hello', () => {
  describe('.respondsTo', () => {
    it('responds to "hello"', () => {
      expect(hello.respondsTo('hello')).to.be.ok
    })

    it('responds to "hello world"', () => {
      expect(hello.respondsTo('hello world')).to.be.ok
    })

    it('does not responds to "meow world"', () => {
      expect(hello.respondsTo('meow world')).to.not.be.ok
    })
  })

  describe('.search', () => {
    it('does not include a name', () => {
      hello.search('hello').then((results) => {
        expect(results[0].title).to.not.include('spock')
      })
    })

    it('does include a name', () => {
      hello.search('hello spock').then((results) => {
        expect(results[0].title).to.include('spock')
      })
    })
  })
})
