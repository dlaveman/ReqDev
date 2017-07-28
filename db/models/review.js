const { TEXT, INTEGER } = require('sequelize')

module.exports = db =>
  db.define('reviews', {
    comment: TEXT,
    rating: {
      type: INTEGER,
      validate: { min: 0, max: 5 },
    },
  })
