const request = require('supertest')
const { expect } = require('chai')
const db = require('APP/db'), { Developer } = db
const app = require('./start')

const louie = {
  email: 'louie@secrets.org',
  name: "Louie",
  rate: 50
}

/* global describe it before afterEach beforeEach */
describe('/api/developer', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  beforeEach('create a developer', () =>
    Developer.create({
      email: 'louie@secrets.org',
      name: "Louie",
      rate: 50,
      id: 9999
    })
  )

  describe('GET /developer/:id', () => {
    describe('when getting a developer/:id', () =>
      it('responds with the developer', () =>
        request(app).get('/api/developer/9999')
          .expect(200)
          .then(res => expect(res.body).to.contain({
            name: "Louie"
          }))
      ))
    })
  })
