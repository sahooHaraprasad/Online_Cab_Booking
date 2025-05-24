const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Add a new car (Admin)
router.post('/', async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({ isAvailable: true });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single car
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
