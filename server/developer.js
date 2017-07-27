'use strict'

const db = require('APP/db')
const Developer = db.model('developers')

module.exports = require('express').Router()
  // OB/JL: consider get all (and assume query string)... GET /api/developers?category_id=123
  .get('/:developerId', (req, res, next) =>
    Developer.findById(req.params.developerId)
      .then(developer => res.json(developer))
      .catch(next))
  .post('/', (req, res, next) =>
    Developer.create(req.body)
      .then(developer => res.status(201).json(developer))
      .catch(next))
