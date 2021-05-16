'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subtask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subtask.belongsTo(models.Task, {
        as: '_taskId',
        foreignKey: 'taskId',
        onDelete: 'CASCADE'
      })
    }
  };
  Subtask.init({
    name: DataTypes.STRING,
    taskName: DataTypes.STRING,
    dateAndTime: DataTypes.STRING,
    taskId: DataTypes.NUMBER,
    isDelete: DataTypes.BOOLEAN,
    isComplete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Subtask',
  });
  return Subtask;
};