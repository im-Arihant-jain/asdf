const mongoose = require('mongoose');

// Define a Mongoose schema
const govofficialProfile = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  cityState: {
    type: String,
    required: true
  },
  ministry: {
    type: String,
    enum: ['Category1', 'Category2', 'Category3'], // Add your categories here
    default: 'Category1' // Default category
  }
   
});

 
const GovtProfile= mongoose.model('GovtProfile', govofficialProfile);