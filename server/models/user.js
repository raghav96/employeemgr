'use strict';
module.exports = (sequelize, DataTypes) => {
  var bcrypt = require('bcrypt');
  var salt;
  var User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false, unique:true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type:DataTypes.STRING, allowNull:false}
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

  return User;
};
