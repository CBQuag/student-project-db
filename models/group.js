'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group.belongsTo(models.project,{
        foreignKey: 'project_id',
        as:         'project'
      })
      group.hasMany(models.student,{
        foreignKey: 'group_id',
        as:         'student'
      })
    }
  }
  group.init({
    project_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};