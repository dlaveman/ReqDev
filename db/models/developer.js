const { STRING, VIRTUAL, ARRAY, TEXT, INTEGER } = require('sequelize');

module.exports = db =>
  db.define(
    'developers',
    {
      name: {
        type: STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: STRING,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      photo: {
        type: STRING,
        defaultValue: '/images/default-photo.jpg'
      },
      skills: {
        type: ARRAY(STRING),
        defaultValue: [],
        set: function (skills) {
          skills = skills || [];
          if (typeof skills === 'string') {
            skills = skills.split(',').map(str => str.trim());
          }
          this.setDataValue('skills', skills);
        }
      },
      description: TEXT,
      rate: {
        type: INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      indexes: [{ fields: ['email'], unique: true }]
    }
  );

module.exports.associations = (Developer, { Order, Cart, Category, Review }) => {
  Developer.belongsToMany(Category, {through: 'DeveloperCategory'})
  Developer.hasOne(Review)
  Developer.hasOne(Order)
}
