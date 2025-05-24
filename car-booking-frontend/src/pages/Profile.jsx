import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);

        const bookingsResponse = await axios.get(`http://localhost:5000/api/bookings/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(bookingsResponse.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-8">{error}</div>;
  if (!user) return <div className="text-center p-8">User not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* User Profile Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-600">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Booking History Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Booking History</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-600">No bookings found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Car</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="border-t">
                    <td className="px-4 py-2">{booking.carName}</td>
                    <td className="px-4 py-2">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href={`https://wa.me/6371918118`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Contact Support
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;