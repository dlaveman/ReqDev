const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db'), { Cart, User, Developer } = db
  , app = require('./start')

var idCreated
const alice = {
  username: 'alice@secrets.org',
  password: '12345',
  name: 'Alice',
}
/* global describe it before afterEach */

describe('/api/cart/userId', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
  beforeEach('create a cart', () => {
    return Cart.create({
      hours: 4,
      user: {
        email: 'alice@secrets.org',
        name: 'Alice',
      }
    }, {
      include: [ User ]
    })
      .then((res) => {
        return idCreated = res.user_id
      })
  })

  describe('GET /cart', () => {
    describe('when getting a cart/:userId', () =>
      it('responds with the users cart', () =>
        request(app).get('/api/cart/' + idCreated)
          .expect(200)
          .then(res => expect(res.body[0]).to.contain({
            hours: 4
          }))
      ))
  })
})
