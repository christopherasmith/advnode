var mongoose = require('mongoose');

var User = new mongoose.model('user', new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
  }));

  module.exports = {User};
  