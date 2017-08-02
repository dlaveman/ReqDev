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
  let idCreated
  const agent = request.agent(app)
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
  beforeEach('create a user and cart', () => {
    return User.create({
      email: alice.username,
      password: alice.password,
      name: alice.name,
    })
    .then((res) => {
      idCreated = res.id
      return agent.post('/api/auth/login/local').send(alice)
    })
      .then((res) => {
        return Cart.create({
          hours: 4,
          user_id: idCreated
        })
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
