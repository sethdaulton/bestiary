// Seems finished - Check

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model { }

Monster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AC: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    HD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CR: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'monster',
  }
);

module.exports = Monster;
