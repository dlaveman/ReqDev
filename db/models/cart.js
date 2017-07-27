const { INTEGER } = require('sequelize')

module.exports = db =>
  db.define('carts', {
    hours: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        notEmpty: true,
      },
    },
  })

module.exports.associations = (Cart, { Developer }) => {
  Cart.belongsTo(Developer)
}
