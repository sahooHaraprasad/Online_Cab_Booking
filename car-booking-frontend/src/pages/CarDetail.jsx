import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${id}`);
        setCar(response.data);
      } catch (err) {
        setError('Failed to load car details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleWhatsAppBooking = () => {
    const message = `Hi, I'm interested in booking the ${car.name}. Please provide more details.`;
    const whatsappLink = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleCallBooking = () => {
    window.location.href = 'tel:YOUR_PHONE_NUMBER';
  };

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-8">{error}</div>;
  if (!car) return <div className="text-center p-8">Car not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Car Image */}
        <div className="relative h-96">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Car Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Model: {car.model}</li>
                <li>Year: {car.year}</li>
                <li>Seating Capacity: {car.capacity} persons</li>
                <li>Fuel Type: {car.fuelType}</li>
                <li>Transmission: {car.transmission}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Pricing</h2>
              <div className="text-gray-600">
                <p className="text-2xl font-bold text-blue-600">
                  ₹{car.pricePerDay}/day
                </p>
                <p className="mt-2">* Fuel charges extra</p>
                <p>* GST applicable</p>
              </div>
            </div>
          </div>

          {/* Booking Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600"
            >
              Book via WhatsApp
            </button>
            <button
              onClick={handleCallBooking}
              className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              Book via Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;