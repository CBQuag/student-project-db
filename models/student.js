'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsTo(models.group,{
        foreignKey: 'group_id',
        as:         'group'
      })
    }
  }
  student.init({
    group_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    ssn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};