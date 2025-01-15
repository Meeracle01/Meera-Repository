// index.js

const express = require('express');
const app = express();
const stringRoutes = require('./routes/stringRoutes');

app.use(express.json());

// Use string routes
app.use('/strings', stringRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
