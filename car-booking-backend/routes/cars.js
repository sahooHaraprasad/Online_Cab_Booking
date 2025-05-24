const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Get all available cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({ isAvailable: true });
    console.log('Cars fetched:', cars.length); // Debug log
    res.json(cars);
  } catch (err) {
    console.error('Error fetching cars:', err);
    res.status(500).json({ message: 'Error fetching cars' });
  }
});

module.exports = router;
