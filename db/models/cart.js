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

module.exports.associations = (Cart, { User }) => {
  Cart.belongsTo(User)
}
