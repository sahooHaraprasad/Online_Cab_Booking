import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <a href="tel:+91 6371918118" className="text-blue-600 hover:underline">
                    +91 6371918118
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp:</h3>
                  <a 
                    href="https://wa.me/+91 6371918118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <a href="mailto:haraprasadsahoo5805@gmail.com" className="text-blue-600 hover:underline">
                    haraprasadsahoo5805@gmail
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p>123 Main Street</p>
                  <p>City, State 12345</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded h-32"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;