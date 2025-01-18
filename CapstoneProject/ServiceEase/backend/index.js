import express from 'express';  // Import express
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import serviceRoutes from './routes/serviceRoutes.js'; // Import the routes (no curly braces because it's the default export)

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // For parsing incoming JSON requests
app.use(cors()); // For allowing cross-origin requests

// MongoDB connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.use('/services', serviceRoutes); // Integrate the routes

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
