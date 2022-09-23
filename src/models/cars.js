'use strict';


const carSchema = (sequelize, DataTypes) => sequelize.define(
  'Car',
  {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAutomatic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
);

module.exports = carSchema;