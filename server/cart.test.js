/* global beforeEach */
const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db'), { Cart, User, Developer } = db
  , app = require('./start')

const alice = {
  username: 'alice@secrets.org',
  password: '12345',
  name: 'Alice',
}

/* global describe it before afterEach */

describe('/api/cart', () => {
  const agent = request.agent(app)
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
  beforeEach('create a user and cart', () => {
    return Cart.create({
      hours: 4,
      user: {
        email: 'alice@secrets.org',
        name: 'Alice',
        password: '12345'
      }
    }, {
      include: [ User ]
    })
      .then((res) => {
        return agent.post('/api/auth/login/local').send(alice)
      })
      .catch(err => console.log('err', err))
  })
  it('responds with the users cart', () =>
    agent.get('/api/cart/')
      .expect(200)
      .then(res => expect(res.body[0]).to.contain({
        hours: 4
      }))
  )
})
