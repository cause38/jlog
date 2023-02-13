const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    maxLength: 50,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  file: [],
  tags: [],
  like: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = {Post};
