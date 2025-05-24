const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use('/api/cars', require('./routes/cars'));
app.use('/api/auth', require('./routes/auth')); // Add this line

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));