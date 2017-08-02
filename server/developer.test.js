const request = require('supertest')
const { expect } = require('chai')
const db = require('APP/db'), { Developer } = db
const app = require('./start')

let idCreated

/* global describe it before afterEach beforeEach */
describe('/api/developer', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  beforeEach('create a developer', () =>
    Developer.create({
      email: 'louie@secrets.org',
      name: 'Louie',
      rate: 50,
    })
    .then((res) => {
      return idCreated = res.id
    })
  )

  describe('GET /developer/:id', () => {
    describe('when getting a developer/:id', () =>
      it('responds with the developer', () => {
        return request(app).get('/api/developer/' + idCreated)
          .expect(200)
          .then(res => expect(res.body).to.contain({
            name: 'Louie'
          }))
      })
    )
  })
})
