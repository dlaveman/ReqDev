'use strict'

const db = require('APP/db')
// const User = db.model('users')
// const Cart = db.model('carts')
const Order = db.model('orders')
const OrderItem = db.model('order_item')
const Developer = db.model('developers')

module.exports = require('express').Router()
  .get('/:orderId', (req, res, next) => {
    OrderItem.findAll({
      include: [{
        model: Order,
        where: {
          id: req.params.orderId
        }
      }, {
        model: Developer
      }]
    })
    .then(orders => res.json(orders))
    .catch(next)
  })
  .get('/', (req, res, next) =>
    Order.findAll({
      where: {
        user_id: req.user.id
      }
    })
      .then(orders => res.json(orders))
      .catch(next))
// Pass in object with submit time, cart[]
  .post('/', (req, res, next) =>
    Order.create(
      req.body.submitTime
    )
      .then(order => {
        req.body.cart.forEach(item => item.order_id = order.dataValues.id)
        console.log('Order.create cart----', req.body.cart)
        //order.dataValues.id
        OrderItem.bulkCreate(req.body.cart)
      })
      .then(orderItem => {
        //console.log('orderItem======', orderItem)
        res.status(201).json(orderItem)
      })
      .catch(next))

  // .put('/:orderId', (req, res, next) =>
  //   Order.update(req.body, {
  //     where: { id: req.params.orderId },
  //     returning: true
  //   })
  //     .then(res => Order.findOne({
  //       where: { id: res[1][0].id },
  //       include: [{ model: Developer }],
  //     }))
  //     .then(order => { res.json(order) })
  //     .catch(next))

  // .delete('/', (req, res, next) => {
  //   Order.destroy({
  //     where: { user_id: req.query.user }
  //   })
  //     .catch(next)
  // })

  // .delete('/:orderId', (req, res, next) => {
  //   Order.destroy({
  //     where: { id: req.params.orderId }
  //   })
  //     .catch(next)
  // })

// 'use strict'

// const db = require('APP/db')
// const Order = db.model('orders')

// module.exports = require('express').Router()
//   .get('/:userId', (req, res, next) =>
//     Order.findAll({ where: { user_id: req.params.userId } })
//       .then(orders => res.json(orders))
//       .catch(next))
//   .post('/', (req, res, next) =>
//     Order.create(req.body)
//       .then(order => res.status(201).json(order))
//       .catch(next))
//   .get('/:userId/:orderId', (req, res, next) =>
//     Order.findById(req.params.orderId)
//       .then(order => res.json(order))
//       .catch(next))
