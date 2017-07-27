'use strict'

const db = require('APP/db')
const Category = db.model('categories')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Category.findAll()
      .then(categories => res.json(categories))
      .catch(next))
  .post('/', (req, res, next) =>
    Category.create(req.body)
      .then(category => res.status(201).json(category))
      .catch(next))
  // OB/JL: if you have the other all developers route, you may not need this one
  .get('/:categoryId', (req, res, next) =>
    Category.findById(req.params.categoryId)
      .then(category => res.json(category))
      .catch(next))
