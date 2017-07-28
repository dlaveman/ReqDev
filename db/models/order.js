const { INTEGER, DATE, NOW } = require('sequelize')

module.exports = db =>
  db.define('orders', {
    submit_time: {
      type: DATE,
      defaultValue: NOW
    },
  })
