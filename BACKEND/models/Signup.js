const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    namefield: String,
    option : String,
    isVerified: { type: Boolean, default: false } 
  });
  const UserProfile = mongoose.model('UserProfile', userSchema);
  
  module.exports = UserProfile;   