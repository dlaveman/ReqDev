const { STRING, VIRTUAL, ARRAY, TEXT, INTEGER } = require('sequelize')

module.exports = db =>
  db.define(
    'developers',
    {
      name: {
        type: STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: STRING,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      photo: {
        type: STRING,
        defaultValue: '/images/default-photo.jpg',
      },
      skills: {
        type: ARRAY(STRING),
        defaultValue: [],
        set: function(skills) {
          skills = skills || []
          if (typeof skills === 'string') {
            skills = skills.split(',').map(str => str.trim()) // OB/JL: consider trimming outside of if (so it happens for array inputs as well as string inputs)
          }
          this.setDataValue('skills', skills)
        },
      },
      description: TEXT,
      rate: {
        type: INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      indexes: [{ fields: ['email'], unique: true }], // OB/JL: can specify this inline with the field definition
    },
  )

module.exports.associations = (
  Developer,
  { Order, Cart, Category, Review },
) => {
  Developer.belongsToMany(Category, { through: 'DeveloperCategory' })
  Developer.hasOne(Review) // OB/JL: hasMany?
  Developer.hasOne(Order)
  Developer.hasMany(Cart);
}
