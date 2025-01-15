const express = require('express');
const app = express();
const sequelize = require('./dbConnect');

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
