const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tododb',{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {mongoose: mongoose};