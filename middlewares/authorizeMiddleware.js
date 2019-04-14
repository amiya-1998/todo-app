const mongoose = require('mongoose');

const User = mongoose.model('users');
const Todo = require('../models/Todo');

module.exports = (req, res, next) => {
  Todo.findById(req.params.id)
    .then(todo => {
      if (todo.user.equals(req.user.id)) {
        next();
      } else {
        res.status(401).send({
          unauthorized: 'unauthorized'
        });
      }
    })
    .catch(err => console.log(err));
};
