  { INTEGER } = require('sequelize');

module.exports = db =>
  db.define(
    'orders',
    {
      hours: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          notEmpty: true
        }
      },
      price: {
        type: INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }
  );
