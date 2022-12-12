const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/clase24', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
