
var mongoose = require('mongoose');

var Todo = new mongoose.model('todo', new mongoose.Schema({
    text: {type: String, required: true, trim: true, minlength: 1},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number, default: null}
  }));

  module.exports = {Todo};