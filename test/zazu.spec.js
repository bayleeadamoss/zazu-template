const expect = require('chai').expect

describe('zazu.json', () => {
  it('is valid', () => {
    const zazu = require('../zazu.json')
    expect(zazu).to.be.an('object')
  })
})
