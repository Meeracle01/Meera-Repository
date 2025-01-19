const mongoose = require('mongoose');

// Define the schema for a service
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },         // Name of the service (e.g., "Cleaning")
  category: { type: String, required: true },     // Category of the service (e.g., "Home Services")
  description: { type: String },                  // Description of the service
  price: { type: Number, required: true },        // Price of the service
  location: { type: String, required: true }      // Location where the service is available
});

// Create and export the model
module.exports = mongoose.model('Service', serviceSchema);
