const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model {}

Monster.init(
  {
    monster_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
// add in all the other stats
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'monster',
  }
);

module.exports = Monster;
