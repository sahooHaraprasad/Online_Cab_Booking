import { useState, useEffect } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars');
        setCars(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <img
                src={`http://localhost:5000${car.image}`}
                alt={car.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Image failed to load:', car.image);
                  e.target.onerror = null;
                  e.target.src = "http://localhost:5000/images/default-car.jpg";
                }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.name}</h2>
              <div className="space-y-2 text-gray-600">
                <p>Model: {car.model}</p>
                <p>Capacity: {car.capacity} persons</p>
                <p>Fuel Type: {car.fuelType}</p>
                <p className="text-lg font-bold text-blue-600 mt-4">
                  ₹{car.pricePerDay.toLocaleString()}/day
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <a
                  href={`https://wa.me/+916371918118?text=I'm interested in booking the ${car.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition-colors"
                >
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+916371918118"
                  className="flex-1 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
