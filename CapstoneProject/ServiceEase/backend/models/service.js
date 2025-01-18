const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  provider: String,
});

module.exports = mongoose.model('Service', serviceSchema);
