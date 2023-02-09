const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  totalPost: {
    type: Number,
  },
  name: {
    type: String,
  },
});

const Counter = mongoose.model('Post', counterSchema);
module.exports = {Counter};
