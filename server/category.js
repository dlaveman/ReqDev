'use strict'

const db = require('APP/db')
const Category = db.model('categories')
const Developer = db.model('developers')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Category.findAll({
      where: { name: req.query.category },
      include: [
        { model: Developer }
      ]
    })
      .then(developer => res.json(developer))
      .catch(next))
  .post('/', (req, res, next) =>
    Category.create(req.body)
      .then(category => res.status(201).json(category))
      .catch(next))
