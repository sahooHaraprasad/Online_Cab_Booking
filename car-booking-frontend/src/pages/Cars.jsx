import { useState, useEffect } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury & Comfort Cars</h1>
          <p className="text-xl opacity-90">Choose from our premium selection of vehicles</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['all', 'luxury', 'suv', 'sedan'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <img
                  src={`http://localhost:5000${car.image}`}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "http://localhost:5000/images/default-car.jpg";
                  }}
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-blue-600 font-semibold">₹{car.pricePerDay.toLocaleString()}/day</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-users text-gray-500 mr-2"></i>
                    <span>{car.capacity} Seats</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-gas-pump text-gray-500 mr-2"></i>
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar text-gray-500 mr-2"></i>
                    <span>{car.model}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={`https://wa.me/+916371918118?text=I'm interested in booking the ${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+916371918118"
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-phone text-xl"></i>
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
