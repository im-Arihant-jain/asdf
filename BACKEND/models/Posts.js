const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    heading: String,
    mbody: String
  });   
  const Post = mongoose.model('Posts', postSchema);
  module.exports = Post;