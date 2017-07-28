const { INTEGER } = require('sequelize')

module.exports = db =>
  db.define('order_item', {
    hours: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        notEmpty: true,
      },
    },
    rate: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  })

module.exports.associations = (OrderItem, {Order}) => {
  OrderItem.belongsTo(Order)
}
