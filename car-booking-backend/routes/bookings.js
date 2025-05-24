const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const { userId, carId, startTime, endTime } = req.body;

    const start = new Date(startTime);
    const end = new Date(endTime);
    const totalHours = Math.ceil((end - start) / (1000 * 60 * 60));

    // Ideally, fetch price from DB instead of trusting client
    const car = await require('../models/Car').findById(carId);
    const totalPrice = totalHours * car.pricePerHour;

    const booking = new Booking({
      userId,
      carId,
      startTime,
      endTime,
      totalHours,
      totalPrice
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Booking failed' });
  }
});

module.exports = router;
