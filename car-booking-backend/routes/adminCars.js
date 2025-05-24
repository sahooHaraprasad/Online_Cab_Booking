const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// POST: Add a new car
router.post('/add', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.json({ message: 'Car added successfully', car: newCar });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add car' });
  }
});

// PUT: Update car by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Car updated', car: updatedCar });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update car' });
  }
});

// DELETE: Delete car by ID
router.delete('/:id', async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: 'Car deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete car' });
  }
});

module.exports = router;
