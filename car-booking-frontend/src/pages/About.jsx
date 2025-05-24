import { motion } from 'framer-motion';

function About() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
            About <span className="text-blue-600">LuxuryCars</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to LuxuryCars, where luxury meets convenience. We pride ourselves on
                offering the finest selection of premium vehicles for your travel needs.
              </p>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide exceptional car rental experiences with premium vehicles and
                  outstanding customer service that exceeds expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3"
                alt="Luxury Car"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg">
                <p className="text-xl font-bold">Premium Service</p>
                <p>Since 2023</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Premium Fleet', icon: '🚗', desc: 'Access to luxury vehicles' },
              { title: '24/7 Support', icon: '📞', desc: 'Always here to help' },
              { title: 'Easy Booking', icon: '📱', desc: 'Simple reservation process' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;