import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setIsAuthenticated(false);
        }
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isAuthenticated={isAuthenticated} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected Routes */}
            <Route
              path="/cars"
              element={
                <PrivateRoute>
                  <Cars />
                </PrivateRoute>
              }
            />
            <Route
              path="/cars/:id"
              element={
                <PrivateRoute>
                  <CarDetail />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
