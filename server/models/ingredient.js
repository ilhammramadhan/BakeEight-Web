'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ingredient.belongsTo(models.Item)
    }
  }
  Ingredient.init({
    ItemId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Ingredient name is required'
        },
        notEmpty: {
          msg: 'Ingredient name is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};