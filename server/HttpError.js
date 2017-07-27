'use strict'
// from Author Workshop to address what Kate said in the lecture.

const http = require('http')

function HttpError(status, message) {
  const err = new Error(message || http.STATUS_CODES[status])
  err.status = status
  Object.setPrototypeOf(err, HttpError.prototype)
  return err
}

Object.setPrototypeOf(HttpError.prototype, Error.prototype)

HttpError.prototype.middleware = () => {
  const self = this
  return (req, res, next) => {
    next(self)
  }
}

module.exports = HttpError
