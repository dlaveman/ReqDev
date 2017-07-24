  { STRING, TEXT } = require('sequelize');

module.exports = db =>
  db.define(
    'categories',
    {
      name: {
        type: STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: TEXT
    }
  );
