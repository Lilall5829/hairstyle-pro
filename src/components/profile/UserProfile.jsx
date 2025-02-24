// src/components/profile/UserProfile.jsx
import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    avatar: '/avatars/default.jpg',
    appointments: [],
    favorites: []
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Profile</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-purple-600 hover:text-purple-700"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full"
                />
                <div className="mt-4">
                  <h3 className="font-semibold">Name</h3>
                  <p className="text-gray-600">{user.name}</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">{user.phone}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Upcoming Appointments</h3>
                {user.appointments.length === 0 ? (
                  <p className="text-gray-500">No upcoming appointments</p>
                ) : (
                  <div className="space-y-4">
                    {user.appointments.map((appointment) => (
                      <div key={appointment.id} className="border p-4 rounded">
                        <p className="font-semibold">{appointment.service}</p>
                        <p className="text-gray-600">{appointment.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;