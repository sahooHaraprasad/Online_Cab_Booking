const Car = require('../models/Car');

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

exports.addCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json({ msg: 'Car added', car: newCar });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
