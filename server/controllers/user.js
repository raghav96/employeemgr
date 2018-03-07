const User = require('../models').User;

module.exports = {
  create(req,res){
    return User
      .create({ username: req.body.username, email:req.body.email, password: req.body.password })
      .then(user => {
        req.session.user = user.dataValues;
        res.redirect('/employees');
      }).catch(error => {
          res.redirect('/signup');
      });
  },
  findOne(req,res){
    return User
      .find(req.params.username)
      .then(function (user) {
          if (!user) {
            res.redirect('/login');
          } else if (!user.validPassword(password)) {
            res.redirect('/login');
          } else {
            req.session.user = user.dataValues;
            res.redirect('/employees');
          }
      }).catch(error => res.status(400).send(error));
  },
};
