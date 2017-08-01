'use strict'

const db = require('APP/db')
const User = db.model('users')
const Cart = db.model('carts')
const Developer = db.model('developers')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Cart.findAll({
      where: {user_id: req.user.id},
      include: [{
        model: Developer
      }]
    })
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
      .then(res => {
        return Cart.findOne({
          where: { id: res[1][0].id },
          include: [{ model: Developer }],
        })
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
