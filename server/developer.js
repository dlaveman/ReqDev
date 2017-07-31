'use strict'

const db = require('APP/db')
const Developer = db.model('developers')
const Category = db.model('categories')

module.exports = require('express').Router()
  .get('/:developerId', (req, res, next) =>
    Developer.findById(req.params.developerId)
      .then(developer => res.json(developer))
      .catch(next))
  .get('/', (req, res, next) =>
    Category.findOne({
      where: { name: req.query.category },
      include: [
        { model: Developer }
      ]
    })
      .then(category => { res.json(category.developers) })
      .catch(next))

  .post('/', (req, res, next) =>
    Developer.create(req.body)
      .then(developer => res.status(201).json(developer))
      .catch(next))

  .get('/:devId', (req, res, next) =>
    Developer.findById(req.params.devId)
      .then(dev => res.json(dev))
      .catch(next))
