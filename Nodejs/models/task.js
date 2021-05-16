'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.hasMany(models.Subtask, {
        as: '_taskId',
        foreignKey: 'taskId',
      })
    }
  };
  Task.init({
    name: DataTypes.STRING,
    taskName: DataTypes.STRING,
    dateAndTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};