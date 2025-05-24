// for start this use this command:-
// node seedCars.js

const mongoose = require("mongoose");
require("dotenv").config();
const Car = require("./models/Car");

const sampleCars = [
  {
    name: "Toyota Innova Crysta",
    model: "2023",
    capacity: 7,
    fuelType: "Diesel",
    pricePerDay: 3000,
    image: "/images/innova.jpg",
    isAvailable: true,
  },
  {
    name: "Maruti Swift Dzire",
    model: "2023",
    capacity: 4,
    fuelType: "Petrol",
    pricePerDay: 1500,
    image: "/images/dzire.jpg",
    isAvailable: true,
  },
  {
    name: "Honda City",
    model: "2023",
    capacity: 5,
    fuelType: "Petrol",
    pricePerDay: 2000,
    image: "/images/city.jpg",
    isAvailable: true,
  },
  {
    name: "Mercedes-Benz S-Class",
    model: "2023",
    capacity: 4,
    fuelType: "Petrol",
    pricePerDay: 15000,
    image: "/images/mercedes-s.jpg",
    isAvailable: true,
  },
  {
    name: "BMW 7 Series",
    model: "2023",
    capacity: 4,
    fuelType: "Petrol",
    pricePerDay: 14000,
    image: "/images/bmw-7.jpg",
    isAvailable: true,
  },
  {
    name: "Bentley Flying Spur",
    model: "2023",
    capacity: 4,
    fuelType: "Petrol",
    pricePerDay: 45000,
    image: "/images/bentley.jpg",
    isAvailable: true,
  },
  {
    name: "Range Rover Autobiography",
    model: "2023",
    capacity: 5,
    fuelType: "Diesel",
    pricePerDay: 25000,
    image: "/images/range-rover.jpg",
    isAvailable: true,
  },
  {
    name: "Toyota Fortuner",
    model: "2023",
    capacity: 7,
    fuelType: "Diesel",
    pricePerDay: 5000,
    image: "/images/fortuner.jpg",
    isAvailable: true,
  },
  {
    name: "Hyundai Verna",
    model: "2023",
    capacity: 5,
    fuelType: "Petrol",
    pricePerDay: 2000,
    image: "/images/verna.jpg",
    isAvailable: true,
  },
  {
    name: "Toyota Camry",
    model: "2023",
    capacity: 5,
    fuelType: "Hybrid",
    pricePerDay: 6000,
    image: "/images/camry.jpg",
    isAvailable: true,
  },
  {
    name: "Honda CR-V",
    model: "2023",
    capacity: 5,
    fuelType: "Petrol",
    pricePerDay: 4500,
    image: "/images/honda-cr.jpg",
    isAvailable: true,
  },
  {
    name: "Lexus ES",
    model: "2023",
    capacity: 5,
    fuelType: "Hybrid",
    pricePerDay: 8000,
    image: "/images/lexus-es.jpg",
    isAvailable: true,
  },
  {
    name: "BMW X7",
    model: "2023",
    capacity: 7,
    fuelType: "Diesel",
    pricePerDay: 20000,
    image: "/images/bmw-x7.jpg",
    isAvailable: true,
  },
  {
    name: "Mercedes-Benz GLS",
    model: "2023",
    capacity: 7,
    fuelType: "Diesel",
    pricePerDay: 22000,
    image: "/images/mercedes-gls.jpg",
    isAvailable: true,
  },
  {
    name: "Rolls Royce Phantom",
    model: "2023",
    capacity: 7,
    fuelType: "Diesel",
    pricePerDay: 50000,
    image: "/images/rolls-royce.jpg",
    isAvailable: true,
  },
];

async function seedCars() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing cars
    await Car.deleteMany({});
    console.log("Cleared existing cars");

    // Insert new cars
    await Car.insertMany(sampleCars);
    console.log("Added sample cars successfully");

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding cars:", error);
    process.exit(1);
  }
}

seedCars();
