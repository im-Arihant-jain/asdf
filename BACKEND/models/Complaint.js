const mongoose = require('mongoose');

// Define a Mongoose schema
const complaintSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  sinceWhen: {
    type: Date,
    required: true
  },
  cityState: {
    type: String
  },    
  description: {
    type: String
  },
  category: {
    type: String,
    enum: ['Category1', 'Category2', 'Category3'], // Add your categories here
    default: 'Category1' // Default category
  },
  proofOfWork: {
    type: String // Assuming you'll store the URL of the uploaded image
  }
});

// Create a model from the schema
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
