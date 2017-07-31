'use strict'

const db = require('APP/db')
const Cart = db.model('carts')
const Devloper = db.model('developer')

module.exports = require('express').Router()
// Need passport working for changing userId to req.user.id
  .get('/', (req, res, next) =>
    Cart.findAll({include: [{
      model: Devloper,
      where: {
        id: 1
      }
    }]})
      .then(carts => res.json(carts))
      .catch(next)
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
  .delete('/', (req, res, next) => {
    Cart.destroy({
      where: { user_id: req.query.user }
    })
      .catch(next)
  })
  .delete('/:cartId', (req, res, next) => {
    Cart.destroy({
      where: { id: req.params.cartId }
    })
      .catch(next)
  })
