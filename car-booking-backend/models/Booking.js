const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  totalHours: Number,
  totalPrice: Number,
});

module.exports = mongoose.model('Booking', bookingSchema);
