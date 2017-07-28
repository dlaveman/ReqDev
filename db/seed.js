'use strict'

const db = require('APP/db'),
  { User, Favorite, Developer, Category, Cart, Order, OrderItem, Review, Promise } = db,
  { mapValues } = require('lodash'),
  DeveloperCategory = db.model('DeveloperCategory')

function seedEverything() {
  const seeded = {
    users: users(),
    developers: developers(),
    categories: categories(),
  }

  seeded.devCat = devCat(seeded)
  seeded.carts = carts(seeded)
  seeded.orders = orders(seeded)
  seeded.orderItems = orderItems(seeded)
  seeded.reviews = reviews(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234',
  },
})

const developers = seed(Developer, {
  Joe: {
    name: 'Joe',
    email: 'joe@gmail.com',
    rate: 80,
  },
  Jane: {
    name: 'Jane',
    email: 'jane@gmail.com',
    rate: 90,
  },
  Boris: {
    name: 'Boris',
    email: 'boris@gmail.com',
    rate: 100,
  },
})

const categories = seed(Category, {
  WebDev: { name: 'Web Developer' },
  MobileDev: { name: 'Mobile Developer' },
  GameDev: { name: 'Game Developer' },
})

const orders = seed(Order, ({users}) => ({
  Order1: {
    submit_time: '2017-07-27 18:30:00',
    user_id: users.god.id,
  },
  Order2: {
    submit_time: '2017-07-27 19:30:00',
    user_id: users.barack.id,
  }
}))

const orderItems = seed(OrderItem, ({developers, orders}) => ({
  Ordr1a: {
    developer_id: developers.Joe.id,
    rate: developers.Joe.rate,
    hours: 5,
    order_id: orders.Order1.id
  },
  Ordr1b: {
    developer_id: developers.Jane.id,
    rate: developers.Jane.rate,
    hours: 4,
    order_id: orders.Order1.id
  },
  Ordr2a: {
    developer_id: developers.Joe.id,
    rate: developers.Joe.rate,
    hours: 10,
    order_id: orders.Order2.id
  },
  Ordr2b: {
    developer_id: developers.Boris.id,
    rate: developers.Boris.rate,
    hours: 5,
    order_id: orders.Order2.id
  },
  Ordr2c: {
    developer_id: developers.Jane.id,
    rate: developers.Jane.rate,
    hours: 5,
    order_id: orders.Order2.id
  },
}))

const devCat = seed(DeveloperCategory, ({ developers, categories }) => ({
  'Joe loves Web': {
    developer_id: developers.Joe.id,
    category_id: categories.WebDev.id,
  },
  'Joe loves Mobile': {
    developer_id: developers.Joe.id,
    category_id: categories.MobileDev.id,
  },
  'Jane loves Web': {
    developer_id: developers.Jane.id,
    category_id: categories.WebDev.id,
  },
  'Joe loves Games': {
    developer_id: developers.Jane.id,
    category_id: categories.GameDev.id,
  },
  'Boris loves Mobile': {
    developer_id: developers.Boris.id,
    category_id: categories.MobileDev.id,
  },
}))

const carts = seed(Cart, ({ developers, users }) => ({
  CartA1: {
    developer_id: developers.Joe.id,
    user_id: users.god.id,
    hours: 5,
  },
  CartA2: {
    developer_id: developers.Jane.id,
    user_id: users.god.id,
    hours: 4,
  },
  CartB1: {
    developer_id: developers.Joe.id,
    user_id: users.barack.id,
    hours: 10,
  },
  CartB2: {
    developer_id: developers.Boris.id,
    user_id: users.barack.id,
    hours: 5,
  },
  CartB3: {
    developer_id: developers.Jane.id,
    user_id: users.barack.id,
    hours: 5,
  },
  CartC1: {
    user_id: users.barack.id,
    hours: 12,
  },
}))

const reviews = seed(Review, ({ developers, users }) => ({
  'Review Joe': {
    developer_id: developers.Joe.id,
    user_id: users.god.id,
    comment: 'Joe is awesome',
    rating: 5,
  },
  'Review Jane': {
    developer_id: developers.Jane.id,
    user_id: users.god.id,
    comment: 'Jane is amazing',
    rating: 5,
  },
}))

if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(
      this.row,
      0,
      2,
    )}`
  }
}

function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(
          others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other,
        ),
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows =>
        Promise.props(
          Object.keys(rows)
            .map(key => {
              const row = rows[key]
              return {
                key,
                value: Promise.props(row).then(row =>
                  Model.create(row).catch(error => {
                    throw new BadRow(key, row, error)
                  }),
                ),
              }
            })
            .reduce(
              (all, one) => Object.assign({}, all, { [one.key]: one.value }),
              {},
            ),
        ),
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      })
      .catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, { users, devCat })
