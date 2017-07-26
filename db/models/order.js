const { INTEGER } = require('sequelize');

module.exports = db =>
  db.define(
    'orders',
    {
      orderId: {
        type: INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      hours: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          notEmpty: true
        }
      },
      rate: {
        type: INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
    }
  );



