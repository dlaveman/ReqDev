'use strict'

const db = require('APP/db')
const Order = db.model('orders')

module.exports = require('express').Router()
  .get('/:userId', (req, res, next) =>
    Order.findAll({ where: { user_id: req.params.userId } })
      .then(orders => res.json(orders))
      .catch(next))
  .post('/', (req, res, next) =>
    Order.create(req.body)
      .then(order => res.status(201).json(order))
      .catch(next))
  .get('/:userId/:orderId', (req, res, next) =>
    Order.findById(req.params.orderId)
      .then(order => res.json(order))
      .catch(next))
