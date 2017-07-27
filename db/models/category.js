const { STRING, TEXT } = require('sequelize')

module.exports = db =>
  db.define('categories', {
    // OB/JL: consider unique
    name: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: TEXT,
  })

module.exports.associations = (Category, { Developer }) => {
  Category.belongsToMany(Developer, { through: 'DeveloperCategory' })
}
