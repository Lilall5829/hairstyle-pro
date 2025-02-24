// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import VirtualTryOn from './components/ar/VirtualTryOn';
import HairstyleGallery from './components/catalog/HairstyleGallery';
import StyleDetails from './components/catalog/StyleDetails';
import AppointmentBooking from './components/booking/AppointmentBooking';
import UserProfile from './components/profile/UserProfile';
import StylistDashboard from './components/profile/StylistDashboard';
import Share from './components/social/Share';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('client');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-purple-600">HairStyle Pro</h1>
              {isAuthenticated && (
                <div className="space-x-4">
                  <a href="/gallery" className="text-gray-700 hover:text-purple-600">Gallery</a>
                  <a href="/try-on" className="text-gray-700 hover:text-purple-600">Try On</a>
                  <a href="/booking" className="text-gray-700 hover:text-purple-600">Book</a>
                  <a href="/profile" className="text-gray-700 hover:text-purple-600">Profile</a>
                </div>
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/try-on"
              element={isAuthenticated ? <VirtualTryOn /> : <Navigate to="/login" />}
            />
            <Route
              path="/gallery"
              element={isAuthenticated ? <HairstyleGallery /> : <Navigate to="/login" />}
            />
            <Route
              path="/style/:id"
              element={isAuthenticated ? <StyleDetails /> : <Navigate to="/login" />}
            />
            <Route
              path="/booking"
              element={isAuthenticated ? <AppointmentBooking /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated && userRole === 'stylist' ? (
                  <StylistDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/share/:id"
              element={isAuthenticated ? <Share /> : <Navigate to="/login" />}
            />
            <Route path="/" element={<Navigate to="/gallery" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;