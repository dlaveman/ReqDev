const { STRING, INTEGER } = require('sequelize')

module.exports = db =>
  db.define('reviews', {
    comment: STRING,
    rating: {
      type: INTEGER,
      validate: { min: 0, max: 5 },
    },
  })
