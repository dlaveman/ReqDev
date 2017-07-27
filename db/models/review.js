const { STRING, INTEGER } = require('sequelize')

module.exports = db =>
  db.define('reviews', {
    comment: STRING, // OB/JL: will be limited length, maybe go with TEXT
    rating: {
      type: INTEGER,
      validate: { min: 0, max: 5 },
    },
  })
