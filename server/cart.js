'use strict'

const db = require('APP/db')
const Cart = db.model('carts')

module.exports = require('express').Router()
  // OB/JL: you can potentially use `req.user.id`
  .get('/:userId', (req, res, next) =>
    Cart.findAll({ where: { user_id: req.params.userId } })
      .then(carts => res.json(carts))
      .catch(next))
  .post('/', (req, res, next) =>
    Cart.create(req.body)
      .then(cart => res.status(201).json(cart))
      .catch(next))
  .put('/:cartId', (req, res, next) =>
    Cart.update(req.body, {
      where: { id: req.params.cartId },
      returning: true
    })
      .then(cart => { res.json(cart) })
      .catch(next))
  .delete('/:userId', (req, res, next) => {
    Cart.destroy({
      where: { user_id: req.params.userId }
    })
      .catch(next)
  })
  .delete('/:userId/:cartId', (req, res, next) => {
    Cart.destroy({
      where: { id: req.params.cartId }
    })
      .catch(next)
  })
