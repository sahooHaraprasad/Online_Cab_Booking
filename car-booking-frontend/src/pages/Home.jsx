import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Ride Today
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose from our wide range of cars for your travel needs
          </p>
          <Link
            to="/cars"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            View Cars
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book your ride with just a few clicks through WhatsApp or call
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is available round the clock for your assistance
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Choose from our variety of cars to match your needs
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <div className="space-x-4">
            <a
              href="tel:+916371918118"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/+916371918118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;