import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">About Our Service</h1>
          <p className="text-gray-600 mb-4">
            Welcome to our premier cab booking service. We provide reliable and comfortable
            transportation solutions for all your travel needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Choose from our diverse fleet of well-maintained vehicles suitable for any occasion.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book your ride instantly through WhatsApp or phone call.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer support team is always ready to assist you.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Professional and experienced drivers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Competitive and transparent pricing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Clean and well-maintained vehicles</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Flexible booking options</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <div className="space-x-4">
            <Link 
              to="/cars"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              View Cars
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;