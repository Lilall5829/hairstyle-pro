// src/components/profile/StylistDashboard.jsx
import React, { useState, useEffect } from 'react';

function StylistDashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      client: 'Jane Smith',
      service: 'Haircut',
      date: '2024-02-15',
      time: '10:00 AM',
      status: 'confirmed'
    },
    // Add more appointments...
  ]);

  const [stats, setStats] = useState({
    totalAppointments: 45,
    completedAppointments: 38,
    averageRating: 4.8,
    revenue: 3250
  });

  const handleStatusChange = (appointmentId, newStatus) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === appointmentId
        ? { ...appointment, status: newStatus }
        : appointment
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Stylist Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm">Total Appointments</h3>
          <p className="text-3xl font-bold">{stats.totalAppointments}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm">Completed</h3>
          <p className="text-3xl font-bold">{stats.completedAppointments}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm">Average Rating</h3>
          <p className="text-3xl font-bold">{stats.averageRating}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-sm">Revenue</h3>
          <p className="text-3xl font-bold">${stats.revenue}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Client</th>
                  <th className="text-left py-4">Service</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Time</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b">
                    <td className="py-4">{appointment.client}</td>
                    <td className="py-4">{appointment.service}</td>
                    <td className="py-4">{appointment.date}</td>
                    <td className="py-4">{appointment.time}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <select
                        value={appointment.status}
                        onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                        className="border rounded p-1"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylistDashboard;