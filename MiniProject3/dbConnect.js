const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const uri = process.env.DB_URI;

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
