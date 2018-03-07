'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    supervisors: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};
