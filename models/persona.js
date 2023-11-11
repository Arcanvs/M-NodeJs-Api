'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'persona',
  });
  return persona;
};