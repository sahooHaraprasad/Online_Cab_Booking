const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Car', carSchema);
