'use strict'

const db = require('APP/db')
const Developer = db.model('developers')
const Category = db.model('categories')

module.exports = require('express').Router()
  .post('/', (req, res, next) =>
    Developer.create(req.body)
      .then(developer => res.status(201).json(developer))
      .catch(next))
