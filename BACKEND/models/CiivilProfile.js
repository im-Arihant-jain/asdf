const mongoose = require('mongoose');

// Define a Mongoose schema
const civilProfile = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cityState: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    enum: ['Category1', 'Category2', 'Category3'], // Add your categories here
    default: 'Category1' // Default category
  },
});

 
const CivilProfile= mongoose.model('CivilProfile', civilProfile);

module.exports = CivilProfile;