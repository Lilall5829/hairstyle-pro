// src/components/booking/AppointmentBooking.jsx
import React, { useState } from 'react';
import Calendar from './Calendar';

function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState(null);

  const services = [
    { id: 1, name: 'Haircut', duration: 60, price: 75 },
    { id: 2, name: 'Color', duration: 120, price: 150 },
    { id: 3, name: 'Style', duration: 45, price: 55 },
  ];

  const stylists = [
    { id: 1, name: 'John Smith', rating: 4.8 },
    { id: 2, name: 'Sarah Johnson', rating: 4.9 },
    { id: 3, name: 'Mike Wilson', rating: 4.7 },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleBooking = () => {
    // Handle booking submission
    console.log({
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      stylist: selectedStylist,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Book an Appointment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Select Service</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedService?.id === service.id ? 'border-purple-600' : ''
                  }`}
                >
                  <div className="flex justify-between">
                    <span className="font-semibold">{service.name}</span>
                    <span className="text-purple-600">${service.price}</span>
                  </div>
                  <span className="text-gray-500">{service.duration} min</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Select Stylist</h3>
            <div className="space-y-4">
              {stylists.map((stylist) => (
                <div
                  key={stylist.id}
                  onClick={() => setSelectedStylist(stylist)}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedStylist?.id === stylist.id ? 'border-purple-600' : ''
                  }`}
                >
                  <div className="flex justify-between">
                    <span className="font-semibold">{stylist.name}</span>
                    <span className="text-yellow-500">★ {stylist.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Select Date</h3>
            <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Select Time</h3>
            <div className="grid grid-cols-3 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 border rounded ${
                    selectedTime === time
                      ? 'bg-purple-600 text-white'
                      : 'hover:border-purple-600'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime || !selectedService || !selectedStylist}
          className={`px-8 py-3 rounded-lg ${
            !selectedDate || !selectedTime || !selectedService || !selectedStylist
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-white`}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default AppointmentBooking;