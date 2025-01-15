require('dotenv').config(); // Load .env file
require('./dbConnect'); // Connect to MongoDB

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Use the service routes
app.use('/services', require('./Routes/serviceRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

