import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Cab Booking
          </Link>

          <div className="flex space-x-4">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/cars" className="hover:text-blue-600">
              Cars
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="hover:text-blue-600">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
